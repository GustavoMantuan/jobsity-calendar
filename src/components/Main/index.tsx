import Calendar from 'components/Calendar'
import { useContext } from 'react'
import * as S from './styles'

import MonthSelection from 'components/MonthSelection'
import Modal from 'components/Modal'
import { ReminderContext } from 'context'

const Main = ({
  title = 'Jobsity Calendar',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const { currentDate, currentMonth, isModalOpen, closeModal } = useContext(
    ReminderContext
  )
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <MonthSelection currentMonth={currentMonth} />
      <Calendar currentDate={currentDate} />
      <Modal showModal={isModalOpen} setShowModal={() => closeModal()} />
    </S.Wrapper>
  )
}

export default Main
