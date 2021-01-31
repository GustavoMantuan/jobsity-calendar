import { createContext } from 'react'

export type State = {
  currentMonth: number
  currentDate: Date
  isModalOpen: boolean
  reminders: any
  selectedReminder?: Reminder
  openModal?: any
  addReminder?: any
  closeModal?: any
  reminderDate?: string
  selectReminder?: any
}

export interface Reminder {
  id?: string
  reminder: string
  time: string
  color: string
  reminderDate: string
  city: string
}

const initalState = {
  currentMonth: new Date().getMonth(),
  currentDate: new Date(),
  isModalOpen: false,
  reminders: {}
}

export const ReminderContext = createContext<State>(initalState)
