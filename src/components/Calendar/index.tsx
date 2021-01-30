import { useEffect, useState } from 'react'
import * as S from './styles'
import WeekDays from './WeekDays'

import getDaysInMonth from 'date-fns/getDaysInMonth'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import isWeekend from 'date-fns/isWeekend'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

import Day from './Day'
import { getWeeksInMonth } from 'date-fns'

export type CalendarType = {
  currentMonthName: string
  currentMonthNumber: number
  currentDate: Date
}

const Calendar = ({ currentDate }: CalendarType) => {
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(currentDate))
  const [firstWeekDay, setFirstWeekDay] = useState(
    startOfMonth(currentDate).getDay()
  )
  const [lastWeekDay, setLastWeekDay] = useState(
    endOfMonth(currentDate).getDay()
  )
  const [lastDayOfOfLastMonth, setLastDayOfMonth] = useState(
    lastDayOfMonth(subMonths(currentDate, 1)).getDate()
  )

  return (
    <S.CalendarWrapper weeksInMonth={getWeeksInMonth(currentDate)}>
      <WeekDays />
      {Array.from(Array(firstWeekDay), (_, x) => x + 1)
        .reverse()
        .map((day) => {
          lastDayOfMonth
          const date = new Date(
            subMonths(currentDate, 1).setDate(lastDayOfOfLastMonth - day + 1)
          )
          return (
            <Day
              isDisabled={true}
              isWeekend={isWeekend(date)}
              key={`${day}-${day}`}
              currentDate={date}
            />
          )
        })}
      {Array.from({ length: daysInMonth }, (v, k) => {
        const date = new Date(new Date().setDate(k + 1))
        return <Day isWeekend={isWeekend(date)} currentDate={date} />
      })}
      {Array.from({ length: 6 - lastWeekDay }, (v, k) => {
        const date = new Date(addMonths(currentDate, 1).setDate(k + 1))
        return (
          <Day
            isWeekend={isWeekend(date)}
            currentDate={date}
            isDisabled={true}
          />
        )
      })}
    </S.CalendarWrapper>
  )
}

export default Calendar
