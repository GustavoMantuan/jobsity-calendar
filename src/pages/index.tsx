import { useReducer, useMemo } from 'react'
import Main from 'components/Main'
import { ReminderContext, State } from 'context'

export const SET_CURRENT_DATE = 'SET_CURRENT_DATE'

type Action = { type: 'SET_CURRENT_DATE'; payload: any }

export default function CalendarPage() {
  const [state, dispatch] = useReducer(
    (prevState: State, action: Action) => {
      switch (action.type) {
        case SET_CURRENT_DATE: {
          const { currentDate } = action.payload
          console.log(currentDate)
          return {
            ...prevState,
            currentMonth: currentDate.getMonth(),
            currentDate: currentDate
          }
        }
        default:
          return {
            ...prevState
          }
      }
    },
    {
      currentMonth: new Date().getMonth(),
      currentDate: new Date()
    }
  )

  const reminderStateProvider = useMemo(
    () => ({
      setCurrentDate: (currentDate: Date) =>
        dispatch({
          type: SET_CURRENT_DATE,
          payload: { currentDate }
        }),
      currentDate: state.currentDate,
      currentMonth: state.currentMonth
    }),
    [state.currentDate, state.currentMonth]
  )

  return (
    <ReminderContext.Provider value={reminderStateProvider}>
      <Main />
    </ReminderContext.Provider>
  )
}
