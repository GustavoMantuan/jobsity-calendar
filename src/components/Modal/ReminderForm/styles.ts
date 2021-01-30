import styled, { css } from 'styled-components'

type InputTypes = {
  zIndex?: number
  maxWidth?: string
}

export const FormWrapper = styled.div`
  width: 90%;
  height: 100%;
  background: transparent;
  padding: 30px;
  align-items: center;
  justify-items: center;
`

export const Placeholder = styled.span`
  position: absolute;
  left: 30px;
  top: 45%;
  color: #aaa;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`

export const PlaceholderActive = styled.span`
  position: absolute;
  top: 0px;
  left: 30px;
  font-size: 0.9rem;
  color: #fff;
`

export const InputWrapper = styled.div`
  position: relative;
  font-size: 1rem;
  padding: 20px;
  display: flex;
  justify-self: flex-start;
`

export const MultipleInputWrapper = styled.div`
  display: flex;
`

export const Input = styled.input<InputTypes>`
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  background: #f2f2f2;
  padding: 1rem;
  min-height: 80px;
  width: 51vw;
  font-size: 1rem;
  border-radius: 3px;
  outline: none;
  &:valid + ${Placeholder} {
    top: 0px;
    left: 30px;
    font-size: 0.9rem;
    color: #fff;
  }
  &:focus {
    border: none;
  }
  &:focus + ${Placeholder} {
    top: 0px;
    left: 30px;
    font-size: 0.9rem;
    color: #fff;
  }
  ${({ zIndex, maxWidth = '51vw' }) => css`
    z-index: ${zIndex};
    max-width: ${maxWidth};
  `}
`

export const TextArea = styled.textarea`
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  background: #f2f2f2;
  padding: 1.2rem;
  border-radius: 3px;
  width: 51vw;
  resize: none;
  outline: none;
  &:focus {
    border: none;
  }
  &:focus + ${Placeholder} {
    top: 0px;
    left: 30px;
    font-size: 0.9rem;
    color: #fff;
  }
`

export const SubmitButton = styled.button`
  min-width: 100px;
  width: 50vw;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #011638;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`
