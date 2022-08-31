import React from 'react';
import { useTranslation } from 'react-i18next';
import PasswordComponent from './content/password';
import PhoneComponent from './content/phone';
import VerifyComponent from './content/verify';

export default function MainContent({ myState, setMyState, handleOk }) {
  const { t } = useTranslation();
  return (
    <>
      {myState?.step === 0 ? (
        <PhoneComponent
          myState={myState}
          handleOk={handleOk}
          setMyState={setMyState}
        />
      ) : myState?.step === 1 ? (
        <VerifyComponent
          myState={myState}
          handleOk={handleOk}
          setMyState={setMyState}
        />
      ) : (
        <PasswordComponent
          myState={myState}
          handleOk={handleOk}
          setMyState={setMyState}
        />
      )}
    </>
  );
}
