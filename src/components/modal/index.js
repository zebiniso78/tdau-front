import React from 'react';
import { MyModal } from './style';
import PureModal from 'react-pure-modal';
import { BsCheckLg } from 'react-icons/bs';

const Modal = (props) => {
  return (
    <MyModal>
      <PureModal
        header=""
        scrollable={true}
        closeButton="Ok"
        closeButtonPosition="bottom"
        onClose={props.onClose}
        isOpen={props.isOpen}
      >
        <BsCheckLg />
        <p>Ваша заявка успешно отправлена, ждите ответа</p>
      </PureModal>
    </MyModal>
  );
};

export default Modal;
