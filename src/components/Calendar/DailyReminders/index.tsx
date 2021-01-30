import { Badge } from '../Badge/styles'
import * as S from './styles'

type DailyRemindersTypes = {
  currentDate: Date
}

const DailyReminders = ({ currentDate }: DailyRemindersTypes) => {
  return (
    <S.DailyRemindersWrapper>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
      <Badge>{currentDate.toLocaleDateString()}</Badge>
    </S.DailyRemindersWrapper>
  )
}

export default DailyReminders
