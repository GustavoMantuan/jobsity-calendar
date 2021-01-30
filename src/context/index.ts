import { createContext } from 'react'

export type State = {
  currentMonth: number
  currentDate: Date
}

const initalState = {
  currentMonth: new Date().getMonth(),
  currentDate: new Date()
}

export const ReminderContext = createContext<State>(initalState)
