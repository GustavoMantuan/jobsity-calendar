import Calendar from 'components/Calendar'
import { useEffect, useState } from 'react'
import * as S from './styles'

import getMonth from 'date-fns/getMonth'
import MonthSelection from 'components/MonthSelection'

const Main = ({
  title = 'Jobsity Calendar',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {}, [])

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <MonthSelection currentMonth={getMonth(currentDate)} />
      <Calendar
        currentMonthNumber={getMonth(currentDate)}
        currentDate={currentDate}
      />
    </S.Wrapper>
  )
}

export default Main
