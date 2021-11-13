import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ modalIsOpen, closeModal, children }) => {

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="custom_modal"
        overlayClassName="Overlay"
      >
          {children}
      </Modal>
    )
}

export default CustomModal;