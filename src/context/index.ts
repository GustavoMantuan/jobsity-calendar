import { createContext } from 'react'

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

export const ReminderContext = createContext<State>(INITIAL_STATE)
