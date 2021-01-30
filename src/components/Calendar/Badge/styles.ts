import styled, { css } from 'styled-components'

type BadgeTypes = {
  color: string
}

export const Badge = styled.span<BadgeTypes>`
  width: 90%;
  margin: 0.1em;
  min-width: 80px;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
  vertical-align: baseline;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
  &:hover {
    opacity: 0.6;
  }
  ${({ color }) => css`
    background-color: ${color};
  `}
`
