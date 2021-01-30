import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { subMonths, addMonths } from 'date-fns'

import * as S from './styles'
import { ReminderContext } from 'context'

const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export type MonthSelectionType = {
  currentMonth: number
}

const MonthSelection = ({ currentMonth }: MonthSelectionType) => {
  const { setCurrentDate, currentDate } = useContext(ReminderContext)
  return (
    <S.Wrapper>
      <FontAwesomeIcon
        icon={faAngleLeft}
        size={'5x'}
        cursor="pointer"
        onClick={() => setCurrentDate(subMonths(currentDate, 1))}
      />
      <S.DateMonth>
        <S.Month>{monthsArray[currentMonth]}</S.Month>
      </S.DateMonth>
      <FontAwesomeIcon
        icon={faAngleRight}
        size={'5x'}
        cursor="pointer"
        onClick={() => setCurrentDate(addMonths(currentDate, 1))}
      />
    </S.Wrapper>
  )
}

export default MonthSelection
