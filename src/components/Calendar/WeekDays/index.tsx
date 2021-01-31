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

const WeekDays = () => {
  return (
    <>
      {WeekDaysArray.map((weekday) => (
        <S.WeekDay key={weekday}>{weekday}</S.WeekDay>
      ))}
    </>
  )
}

export default WeekDays
