import Calendar from 'components/Calendar'
import { useEffect, useState } from 'react'
import * as S from './styles'

import getMonth from 'date-fns/getMonth'
import MonthSelection from 'components/MonthSelection'
import Modal from 'components/Modal'

const Main = ({
  title = 'Jobsity Calendar',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {}, [])

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <MonthSelection currentMonth={getMonth(currentDate)} />

      <Calendar
        currentMonthNumber={getMonth(currentDate)}
        currentDate={currentDate}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </S.Wrapper>
  )
}

export default Main
