import styled from 'styled-components'

type BackgroundTypes = {
  ref: any
  onClick: any
}

export const Background = styled.div<BackgroundTypes>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled.div`
  width: 60%;
  height: fit-content;
  background: #06092b;
  color: #fff;
  position: relative;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 9999;
`

export const Title = styled.h1`
  padding: 1rem;
`

export const SubTitle = styled.h5`
  padding: 0.8rem;
`

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: min-content;
`

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  z-index: 10;
`
