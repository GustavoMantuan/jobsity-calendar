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
  currentDate: Date
}

const Calendar = ({ currentDate }: CalendarType) => {
  const [daysInMonth, setDaysInMonth] = useState(0)
  const [firstWeekDay, setFirstWeekDay] = useState(0)
  const [lastWeekDay, setLastWeekDay] = useState(0)
  const [lastDayOfOfLastMonth, setLastDayOfMonth] = useState(0)

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(currentDate))
    setFirstWeekDay(startOfMonth(currentDate).getDay())
    setLastWeekDay(endOfMonth(currentDate).getDay())
    setLastDayOfMonth(lastDayOfMonth(subMonths(currentDate, 1)).getDate())
  }, [currentDate])
  return (
    <S.CalendarWrapper weeksInMonth={getWeeksInMonth(currentDate)}>
      <WeekDays />
      {Array.from(Array(firstWeekDay), (_, x) => x + 1)
        .reverse()
        .map((day) => {
          const date = new Date(
            subMonths(currentDate, 1).setDate(lastDayOfOfLastMonth - day + 1)
          )
          return (
            <Day
              isDisabled={true}
              isWeekend={isWeekend(date)}
              key={`${date}`}
              currentDate={date}
            />
          )
        })}
      {Array.from({ length: daysInMonth }, (v, k) => {
        const date = new Date(new Date(currentDate).setDate(k + 1))
        return (
          <Day key={`${date}`} isWeekend={isWeekend(date)} currentDate={date} />
        )
      })}
      {Array.from({ length: 6 - lastWeekDay }, (v, k) => {
        const date = new Date(addMonths(currentDate, 1).setDate(k + 1))
        return (
          <Day
            key={`${date}`}
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
