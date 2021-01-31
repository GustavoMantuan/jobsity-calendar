import { useEffect, useState } from 'react'
import { Reminder, ReminderContext } from 'context'
import { useContext } from 'react'
import { Badge } from '../Badge/styles'
import * as S from './styles'

type DailyRemindersTypes = {
  currentDate: Date
}

const DailyReminders = ({ currentDate }: DailyRemindersTypes) => {
  const { reminders, selectReminder } = useContext(ReminderContext)
  const [dailyReminders, setDailyReminders] = useState([])

  useEffect(() => {
    setDailyReminders(
      reminders[currentDate.toLocaleDateString()]?.sort(
        (a: Reminder, b: Reminder) => {
          if (a.time > b.time) {
            return 1
          }
          if (a.time < b.time) {
            return -1
          }
          return 0
        }
      )
    )
  }, [reminders, currentDate])

  return (
    <S.DailyRemindersWrapper>
      {dailyReminders?.map((reminder: Reminder) => (
        <Badge
          onClick={() => {
            selectReminder(reminder)
          }}
          key={reminder.id}
          color={reminder.color}
        >
          {reminder.time} - {reminder.reminder} | city: {reminder.city}
        </Badge>
      ))}
    </S.DailyRemindersWrapper>
  )
}

export default DailyReminders
