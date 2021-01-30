import styled, { css } from 'styled-components'

type DayNumberType = {
  isWeekend: boolean
  isDisabled?: boolean
}

export const DayNumber = styled.p<DayNumberType>`
  font-size: 0.9rem;
  text-align: left;
  position: absolute;
  z-index: 0;
  font-weight: bold;
  padding: 5px 0 0 15px;
  width: calc(90% / 7);
  color: gray;
  ${({ isWeekend, isDisabled }) => css`
    color: ${isDisabled ? 'grey' : isWeekend ? 'blue' : 'black'};
    background-color: ${isWeekend ? '#cecece' : 'white'};
  `}
`

export const Day = styled.div<DayNumberType>`
  border: 1px solid gray;
  cursor: pointer;
  overflow: auto;
  &:hover {
    box-shadow: inset 0 0 0.3em grey;
    ${DayNumber} {
      font-size: 1rem;
    }
  }
  ${({ isWeekend, isDisabled }) => css`
    background-color: ${isWeekend ? '#cecece' : 'white'};
    pointer-events: ${isDisabled ? 'none' : 'all'};
  `}
`
