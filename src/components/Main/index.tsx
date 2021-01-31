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
  const {
    currentDate,
    currentMonth,
    isModalOpen,
    closeModal,
    reminders,
    selectedReminder
  } = useContext(ReminderContext)
  console.log('selected', selectedReminder, reminders)
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <MonthSelection currentMonth={currentMonth} />

      <Calendar
        currentMonthNumber={currentMonth}
        currentDate={currentDate}
        setShowModal={() => closeModal()}
      />
      <Modal showModal={isModalOpen} setShowModal={() => closeModal()} />
    </S.Wrapper>
  )
}

export default Main
