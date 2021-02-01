import Main from 'components/Main'
import {
  ReminderContext,
  useContextProvider,
  useReducerForContext
} from 'context'

export default function CalendarPage() {
  return (
    <ReminderContext.Provider
      value={useContextProvider(useReducerForContext())}
    >
      <Main />
    </ReminderContext.Provider>
  )
}
