import styled, { css } from 'styled-components'

type InputTypes = {
  zIndex?: number
  maxWidth?: string
}

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  padding: 20px 10px;
  display: flex;
  justify-self: flex-start;
  width: 100%;
`

export const MultipleInputWrapper = styled.div`
  display: flex;
  width: 100%;
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
  width: 100%;
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
  ${({ zIndex, maxWidth = '100%' }) => css`
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
  color: black,
  border-radius: 3px;
  width: 100%;
  resize: none;
  outline: none;
  &:focus {
    border: none;
  }
  &:valid + ${Placeholder} {
    top: 0px;
    left: 30px;
    font-size: 0.9rem;
    color: #fff;
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
  width: 100%;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #52d1dc;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
export const DeleteButton = styled(SubmitButton)`
  background: red;
`
