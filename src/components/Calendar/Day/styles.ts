import styled, { css } from 'styled-components'

type DayNumberType = {
  isWeekend: boolean
  isDisabled?: boolean
}

export const DayNumber = styled.p<DayNumberType>`
  font-size: 1.2rem;
  text-align: left;
  z-index: 0;
  font-weight: bold;
  padding: 5px 0 0 15px;
  color: gray;
  ${({ isWeekend, isDisabled }) => css`
    color: ${isDisabled ? 'grey' : isWeekend ? 'blue' : 'black'};
  `}
`

export const Day = styled.div<DayNumberType>`
  border: 1px solid gray;
  cursor: pointer;
  overflow: auto;
  &:hover {
    box-shadow: inset 0 0 0.3em grey;
    ${DayNumber} {
      font-size: 1.3rem;
    }
  }
  ${({ isWeekend, isDisabled }) => css`
    background-color: ${isWeekend ? '#cecece' : 'white'};
    pointer-events: ${isDisabled ? 'none' : 'all'};
  `}
`
