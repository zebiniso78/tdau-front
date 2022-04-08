import React from 'react';
import { MyModal, ErrorModal } from './style';
import PureModal from 'react-pure-modal';
import { BsCheckLg, BsExclamation } from 'react-icons/bs';

const Modal = (props) => {
  return (
    <>
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

      {/* <ErrorModal>
        <PureModal
          header=""
          scrollable={true}
          closeButton="Назад"
          closeButtonPosition="bottom"
          onClose={props.onClose}
          isOpen={props.isOpen}
        >
          <BsExclamation />
          <p>В вашем приложении есть недостатки.</p>
        </PureModal>
      </ErrorModal> */}
    </>
  );
};

export default Modal;
