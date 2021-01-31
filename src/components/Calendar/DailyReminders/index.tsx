import { useEffect, useState } from 'react'
import { Reminder, ReminderContext } from 'context'
import { useContext } from 'react'
import { Badge } from '../Badge/styles'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

type DailyRemindersTypes = {
  currentDate: Date
}

const DailyReminders = ({ currentDate }: DailyRemindersTypes) => {
  const { reminders, selectReminder, clearReminders } = useContext(
    ReminderContext
  )
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

  const confirmClearReminder = () => {
    const answer = confirm(
      `Are you sure you want to delete ALL reminders for ${currentDate.toLocaleDateString()} ?`
    )
    if (answer) {
      clearReminders({ reminderDate: currentDate.toLocaleDateString() })
    }
  }

  return (
    <S.DailyRemindersWrapper>
      {dailyReminders && dailyReminders.length > 0 && (
        <S.CleanButton
          title="Clean reminders"
          aria-label="clear reminders"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            confirmClearReminder()
          }}
        >
          <FontAwesomeIcon icon={faTimesCircle} size={'1x'} color={'red'} />
        </S.CleanButton>
      )}

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
