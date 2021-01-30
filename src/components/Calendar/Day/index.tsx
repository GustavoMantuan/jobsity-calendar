import * as S from './styles'

export type DayTypes = {
  currentDate: Date
  isDisabled?: boolean
  isWeekend: boolean
}

const Day = ({ currentDate, isWeekend, isDisabled = false }: DayTypes) => {
  return (
    <S.Day
      key={`${currentDate}`}
      onClick={() => alert(currentDate.toDateString())}
      title="Click to add a reminder"
      isWeekend={isWeekend}
      isDisabled={isDisabled}
    >
      <S.DayNumber isWeekend={isWeekend} isDisabled={isDisabled}>
        {currentDate.getDate()}
      </S.DayNumber>
      <p>{currentDate.toDateString()}</p>
    </S.Day>
  )
}

export default Day
