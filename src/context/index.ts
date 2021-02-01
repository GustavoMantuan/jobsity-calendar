import { createContext, useReducer } from 'react'
import cuid from 'cuid'

export const SET_CURRENT_DATE = 'SET_CURRENT_DATE'
export const ADD_REMINDER = 'ADD_REMINDER'
export const EDIT_REMINDER = 'EDIT_REMINDER'
export const DELETE_REMINDER = 'DELETE_REMINDER'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SELECT_REMINDER = 'SELECT_REMINDER'
export const CLEAR_REMINDERS = 'CLEAR_REMINDERS'

export type ReminderId = {
  reminderDate: string
  id?: string
}

type Action = {
  type: string
  //eslint-disable-next-line
  payload: any
}

export type State = {
  currentMonth: number
  currentDate: Date
  isModalOpen: boolean
  reminders: Record<string, Reminder[]>
  selectedReminder?: Reminder
  reminderDate: string
  setCurrentDate: (currentDate: Date) => void
  openModal: (reminderDate: string) => void
  addReminder: ({ reminder, time, color, reminderDate, city }: Reminder) => void
  editReminder: ({
    reminder,
    time,
    color,
    reminderDate,
    city,
    id
  }: Reminder) => void
  closeModal: () => void
  selectReminder: ({
    reminder,
    time,
    color,
    reminderDate,
    city,
    id
  }: Reminder) => void
  deleteReminder: ({ reminderDate, id }: ReminderId) => void
  clearReminders: ({ reminderDate }: ReminderId) => void
}

export interface Reminder {
  id?: string
  reminder: string
  time: string
  color: string
  reminderDate: string
  city: string
}

export const INITIAL_STATE = {
  currentMonth: new Date().getMonth(),
  currentDate: new Date(),
  isModalOpen: false,
  reminders: {},
  openModal: () => undefined,
  addReminder: () => undefined,
  editReminder: () => undefined,
  deleteReminder: () => undefined,
  closeModal: () => undefined,
  reminderDate: '',
  selectReminder: () => undefined,
  clearReminders: () => undefined,
  setCurrentDate: () => undefined
}

export const useReducerForContext = () => {
  const [state, dispatch] = useReducer(
    (prevState: State, action: Action) => {
      switch (action.type) {
        case SET_CURRENT_DATE: {
          const { currentDate } = action.payload
          return {
            ...prevState,
            currentMonth: currentDate.getMonth(),
            currentDate: currentDate
          }
        }
        case OPEN_MODAL: {
          return {
            ...prevState,
            isModalOpen: true,
            reminderDate: action.payload.reminderDate
          }
        }
        case CLOSE_MODAL: {
          return {
            ...prevState,
            isModalOpen: false,
            selectedReminder: undefined
          }
        }
        case SELECT_REMINDER: {
          return {
            ...prevState,
            selectedReminder: {
              ...action.payload
            }
          }
        }
        case ADD_REMINDER: {
          const { reminderDate } = action.payload
          const id = cuid()
          return {
            ...prevState,
            isModalOpen: false,
            reminders: {
              ...prevState.reminders,
              [reminderDate]: prevState.reminders[reminderDate]
                ? prevState.reminders[reminderDate].concat([
                    {
                      id,
                      ...action.payload
                    }
                  ])
                : [
                    {
                      id,
                      ...action.payload
                    }
                  ]
            }
          }
        }
        case EDIT_REMINDER: {
          const { reminderDate, id } = action.payload
          const remindersLeft = prevState.reminders[reminderDate].filter(
            (reminder: Reminder) => reminder.id !== id
          )
          return {
            ...prevState,
            isModalOpen: false,
            selectedReminder: undefined,
            reminders: {
              ...prevState.reminders,
              [reminderDate]: [...remindersLeft].concat([
                {
                  id,
                  ...action.payload
                }
              ])
            }
          }
        }
        case CLEAR_REMINDERS: {
          const { reminderDate } = action.payload
          return {
            ...prevState,
            reminders: {
              ...prevState.reminders,
              [reminderDate]: []
            }
          }
        }
        case DELETE_REMINDER: {
          const { reminderDate, id } = action.payload
          const remindersLeft = prevState.reminders[reminderDate].filter(
            (reminder: Reminder) => reminder.id !== id
          )
          return {
            ...prevState,
            isModalOpen: false,
            selectedReminder: undefined,
            reminders: {
              ...prevState.reminders,
              [reminderDate]: [...remindersLeft]
            }
          }
        }
        default:
          return {
            ...prevState
          }
      }
    },
    {
      ...INITIAL_STATE
    }
  )
  return { state, dispatch }
}

type ContextProviderType = {
  state: State
  dispatch: ({ type, payload }: Action) => void
}

export const useContextProvider = ({
  state,
  dispatch
}: ContextProviderType) => {
  return {
    setCurrentDate: (currentDate: Date) => {
      dispatch({
        type: SET_CURRENT_DATE,
        payload: { currentDate }
      })
    },
    addReminder: ({ reminder, time, color, reminderDate, city }: Reminder) => {
      dispatch({
        type: ADD_REMINDER,
        payload: { reminder, time, color, reminderDate, city }
      })
    },
    editReminder: ({
      reminder,
      time,
      color,
      reminderDate,
      city,
      id
    }: Reminder) => {
      dispatch({
        type: EDIT_REMINDER,
        payload: { reminder, time, color, reminderDate, city, id }
      })
    },
    openModal: (reminderDate: string) => {
      dispatch({
        type: OPEN_MODAL,
        payload: { reminderDate }
      })
    },
    closeModal: () => {
      dispatch({
        type: CLOSE_MODAL,
        payload: null
      })
    },
    selectReminder: ({
      reminder,
      time,
      color,
      reminderDate,
      city,
      id
    }: Reminder) => {
      dispatch({
        type: SELECT_REMINDER,
        payload: { reminder, time, color, reminderDate, city, id }
      })
    },
    deleteReminder: ({ reminderDate, id }: ReminderId) => {
      dispatch({
        type: DELETE_REMINDER,
        payload: { reminderDate, id }
      })
    },
    clearReminders: ({ reminderDate }: ReminderId) => {
      dispatch({
        type: CLEAR_REMINDERS,
        payload: { reminderDate }
      })
    },
    currentDate: state.currentDate,
    currentMonth: state.currentMonth,
    isModalOpen: state.isModalOpen,
    reminders: state.reminders,
    selectedReminder: state.selectedReminder,
    reminderDate: state.reminderDate
  }
}

export const ReminderContext = createContext<State>(INITIAL_STATE)
