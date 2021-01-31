import { useReducer, useMemo } from 'react'
import Main from 'components/Main'
import {
  ADD_REMINDER,
  CLEAR_REMINDERS,
  CLOSE_MODAL,
  DELETE_REMINDER,
  EDIT_REMINDER,
  OPEN_MODAL,
  Reminder,
  ReminderContext,
  SELECT_REMINDER,
  SET_CURRENT_DATE,
  State,
  INITIAL_STATE,
  ReminderId
} from 'context'
import cuid from 'cuid'

type Action = {
  type: string
  //eslint-disable-next-line
  payload: any
}

export default function CalendarPage() {
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

  const reminderStateProvider = useMemo(
    () => ({
      setCurrentDate: (currentDate: Date) => {
        dispatch({
          type: SET_CURRENT_DATE,
          payload: { currentDate }
        })
      },
      addReminder: ({
        reminder,
        time,
        color,
        reminderDate,
        city
      }: Reminder) => {
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
    }),
    [
      state.currentDate,
      state.currentMonth,
      state.isModalOpen,
      state.reminders,
      state.selectedReminder,
      state.reminderDate
    ]
  )

  return (
    <ReminderContext.Provider value={reminderStateProvider}>
      <Main />
    </ReminderContext.Provider>
  )
}
