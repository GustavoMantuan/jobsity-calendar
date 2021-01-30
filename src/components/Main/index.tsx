import Calendar from 'components/Calendar'
import { useState, useContext } from 'react'
import * as S from './styles'

import MonthSelection from 'components/MonthSelection'
import Modal from 'components/Modal'
import { ReminderContext } from 'context'

const Main = ({
  title = 'Jobsity Calendar',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const { currentDate, currentMonth } = useContext(ReminderContext)
  const [showModal, setShowModal] = useState(false)

  console.log('at component main', currentDate)

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <MonthSelection currentMonth={currentMonth} />

      <Calendar
        currentMonthNumber={currentMonth}
        currentDate={currentDate}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </S.Wrapper>
  )
}

export default Main
