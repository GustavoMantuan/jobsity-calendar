import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

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
  return (
    <S.Wrapper>
      <FontAwesomeIcon icon={faAngleLeft} size={'5x'} />
      <S.DateMonth>
        <S.Month>{monthsArray[currentMonth]}</S.Month>
      </S.DateMonth>
      <FontAwesomeIcon icon={faAngleRight} size={'5x'} />
    </S.Wrapper>
  )
}

export default MonthSelection
