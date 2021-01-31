import { useContext, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ReminderForm from './ReminderForm'
import { ReminderContext } from 'context'

export type ModalTypes = {
  showModal: boolean
  setShowModal: any
}

const Modal = ({ showModal, setShowModal }: ModalTypes) => {
  const { selectedReminder, reminderDate } = useContext(ReminderContext)
  const refModal = useRef()

  const closeModalOutside = (e: Event) => {
    if (refModal.current === e.target) {
      setShowModal()
    }
  }

  return (
    <>
      {showModal ? (
        <S.Background ref={refModal} onClick={closeModalOutside}>
          <S.ModalWrapper>
            <S.Title>
              {selectedReminder?.reminder ? 'Edit Reminder' : 'Add Reminder'}
            </S.Title>
            <S.SubTitle>{reminderDate}</S.SubTitle>
            <S.ModalBody>
              <ReminderForm selectedReminder={selectedReminder} />
            </S.ModalBody>
            <S.CloseButton
              aria-label="close modal"
              onClick={() => setShowModal()}
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
