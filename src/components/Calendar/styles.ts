import styled, { css } from 'styled-components'

type CalendarWrapperType = {
  weeksInMonth: number
}

export const CalendarWrapper = styled.div<CalendarWrapperType>`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(150px, 300px));
  ${({ weeksInMonth }) => css`
    grid-template-rows: 1fr repeat(${weeksInMonth}, minmax(150px, 300px));
  `}
`
