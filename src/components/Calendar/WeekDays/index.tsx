import * as S from './styles'

const WeekDaysArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const WeekDays = () =>
  WeekDaysArray.map((weekday, index) => (
    <>
      <S.WeekDay key={index}>{weekday}</S.WeekDay>
    </>
  ))

export default WeekDays
