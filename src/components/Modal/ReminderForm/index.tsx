import { useState, useEffect, useContext } from 'react'
import { Reminder, ReminderContext } from 'context'
import * as S from './styles'

type ReminderTypes = {
  selectedReminder?: Reminder
}

const ReminderForm = ({ selectedReminder }: ReminderTypes) => {
  const {
    addReminder,
    closeModal,
    reminderDate,
    editReminder,
    deleteReminder
  } = useContext(ReminderContext)
  const [color, setColor] = useState('#007bff')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState('')
  const [city, setCity] = useState('')

  useEffect(() => {
    if (selectedReminder?.id) {
      setColor(selectedReminder.color)
      setTime(selectedReminder.time)
      setReminder(selectedReminder.reminder)
      setCity(selectedReminder.city)
    }
  }, [selectedReminder])

  const submitReminder = () => {
    selectedReminder?.id
      ? editReminder({
          id: selectedReminder?.id,
          color,
          reminder,
          city,
          time,
          reminderDate
        })
      : addReminder({
          color,
          reminder,
          city,
          time,
          reminderDate
        })
    closeModal()
  }

  return (
    <S.FormWrapper
      onSubmit={(e) => {
        e.preventDefault()
        submitReminder()
      }}
    >
      <S.MultipleInputWrapper>
        <S.InputWrapper>
          <S.Input
            zIndex={10}
            value={color}
            required
            onChange={(e) => setColor(e.target.value)}
            type="color"
            name="color"
          />
          <S.PlaceholderActive>Color</S.PlaceholderActive>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            value={time}
            tabIndex={0}
            onChange={(e) => setTime(e.target.value)}
            zIndex={10}
            required
            type="time"
            name="time"
          />
          <S.PlaceholderActive>Time</S.PlaceholderActive>
        </S.InputWrapper>
      </S.MultipleInputWrapper>

      <S.InputWrapper>
        <S.Input
          required
          value={city}
          tabIndex={1}
          onChange={(e) => setCity(e.target.value)}
          type="city"
          name="reminder-city"
          autoComplete="off"
          title="City"
        />
        <S.Placeholder>City</S.Placeholder>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.TextArea
          required
          maxLength={30}
          tabIndex={2}
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          rows={3}
          name="reminder-description"
          autoComplete="off"
        />
        <S.Placeholder>Reminder</S.Placeholder>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.SubmitButton type="submit" title="Create a reminder">
          Submit
        </S.SubmitButton>
      </S.InputWrapper>
      {selectedReminder?.id && (
        <S.InputWrapper>
          <S.DeleteButton
            onClick={() =>
              deleteReminder({
                reminderDate: selectedReminder.reminderDate,
                id: selectedReminder.id
              })
            }
            type="button"
            title="Delete reminder"
          >
            Delete
          </S.DeleteButton>
        </S.InputWrapper>
      )}
    </S.FormWrapper>
  )
}

export default ReminderForm
