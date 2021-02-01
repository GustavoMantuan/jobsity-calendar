import { ReminderContext } from 'context'
import { useContext } from 'react'
import DailyReminders from '../DailyReminders'
import * as S from './styles'

export type DayTypes = {
  currentDate: Date
  isDisabled?: boolean
  isWeekend: boolean
}

const Day = ({ currentDate, isWeekend, isDisabled = false }: DayTypes) => {
  const { openModal } = useContext(ReminderContext)
  return (
    <S.Day
      onClick={() => openModal(currentDate.toLocaleDateString())}
      title={`Click to add a reminder at ${currentDate.toLocaleDateString()}`}
      isWeekend={isWeekend}
      isDisabled={isDisabled}
    >
      <S.DayNumber isWeekend={isWeekend} isDisabled={isDisabled}>
        {currentDate.getDate()}
      </S.DayNumber>
      <DailyReminders currentDate={currentDate} />
    </S.Day>
  )
}

export default Day
