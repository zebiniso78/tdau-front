import React, { useState } from 'react';
import { RegistrationProvider } from './style';
import PureModal from 'react-pure-modal';
import Button from '../../../button';
import { InputComponent } from 'components/input/controllerInput';
import { useForm, Controller } from 'react-hook-form';
import { PhoneMask } from 'components/mask';
import { authApi } from 'services/api/pagesApi';
import { Modal } from 'antd';


export function Registration({
  setConfirmModel,
  setRegisterModel,
  registerModel,
  setPhoneNumber,
  handleCancel
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(data) {
    let formData = new FormData();
    formData.append('username', data?.username);
    formData.append('phone', `+998${data?.phone}`);
    formData.append('email', data?.email);
    formData.append('password', data?.password);
    setPhoneNumber(`+998${data?.phone}`);
    try {
      setIsLoading(true);
      await authApi.registration(formData);
      setIsLoading(false);
      setConfirmModel(true);
      setRegisterModel(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  return (
    <Modal title="Login Form" visible={registerModel} footer={false} onCancel={handleCancel}>
      <RegistrationProvider onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="username"
          plProps="Username"
          label="Username*"
          required={true}
          className="registration-input"
        />
        <InputComponent
          Controller={Controller}
          control={control}
          require={true}
          nameProps="email"
          plProps="Enter email address"
          label="Email*"
          className="registration-input"
          type="email"
        />
        <PhoneMask
          Controller={Controller}
          control={control}
          nameProps="phone"
          title="Phone number"
          required={true}
          validators={['required', 'isNumber']}
        />
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="password"
          plProps="Enter password"
          label="Password*"
          required={true}
          className="registration-input"
          type="password"
        />
        <Button
          type="submit"
          title="Продолжить"
          disabled={isLoading}
          onClick={() => {
            setConfirmModel(true);
            setRegisterModel(false);
          }}
        />
      </RegistrationProvider>
    </Modal>



  );
}
