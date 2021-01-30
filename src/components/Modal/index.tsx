import { useRef } from 'react'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ReminderForm from './ReminderForm'

export type ModalTypes = {
  showModal: boolean
  setShowModal: any
}

const Modal = ({ showModal, setShowModal }: ModalTypes) => {
  const refModal = useRef()

  const closeModalOutside = (e: Event) => {
    if (refModal.current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <>
      {showModal ? (
        <S.Background ref={refModal} onClick={closeModalOutside}>
          <S.ModalWrapper>
            <S.Title>Add a Reminder</S.Title>
            <S.SubTitle>27 jun 2021</S.SubTitle>
            <S.ModalBody>
              <ReminderForm />
            </S.ModalBody>
            <S.CloseButton
              aria-label="close modal"
              onClick={() => setShowModal(false)}
              title="Close modal"
            >
              <FontAwesomeIcon icon={faTimesCircle} size={'2x'} />
            </S.CloseButton>
          </S.ModalWrapper>
        </S.Background>
      ) : null}
    </>
  )
}

export default Modal
