import * as S from './styles'

const ReminderForm = () => {
  return (
    <S.FormWrapper>
      <S.MultipleInputWrapper>
        <S.InputWrapper>
          <S.Input zIndex={10} type="color" name="reminder-color" />
          <S.PlaceholderActive>Color</S.PlaceholderActive>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input zIndex={10} required type="time" name="reminder-time" />
          <S.PlaceholderActive>Time</S.PlaceholderActive>
        </S.InputWrapper>
      </S.MultipleInputWrapper>

      <S.InputWrapper>
        <S.Input
          required
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
          rows={3}
          name="reminder-description"
          autoComplete="off"
        />
        <S.Placeholder>Reminder</S.Placeholder>
      </S.InputWrapper>
      <S.SubmitButton title="Create a reminder">Submit</S.SubmitButton>
    </S.FormWrapper>
  )
}

export default ReminderForm
