import styled, { css } from 'styled-components'

type CalendarWrapperType = {
  weeksInMonth: number
}

export const CalendarWrapper = styled.div<CalendarWrapperType>`
  height: 95%;
  display: grid;
  grid-template-columns: repeat(7, minmax(150px, 300px));
  ${({ weeksInMonth }) => css`
    grid-template-rows: 1fr repeat(
        ${weeksInMonth},
        calc(80vh / ${weeksInMonth})
      );
  `}
`
