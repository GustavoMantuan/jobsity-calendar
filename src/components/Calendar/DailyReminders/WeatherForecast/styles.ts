import styled from 'styled-components'

export const WeatherText = styled.span`
  font-size: 0.8rem;
  color: #fff;
  background-color: #d78521;
  display: inline-block;
  padding: 0.25em 0.4em;
  margin: 0 3px;
  text-align: left;
  float: right;
  width: 85px;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
`

export const WeatherTooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  &:hover {
    visibility: visible;
  }
}
`
