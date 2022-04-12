import { PhoneMask } from 'components/mask';
import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import Button from '../../../button';
import { useForm, Controller } from 'react-hook-form';
import { authApi } from 'services/api/pagesApi';
import { InputComponent } from 'components/input/controllerInput';
import { useHistory } from 'react-router-dom';

export function Login({ setModal, setRegisterModel, modal }) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('phone', `+998${data?.phone}`);
      formData.append('password', data?.password);
      let res = await authApi.login(formData);
      localStorage.setItem('token', res?.token);
      setIsLoading(false);
      setModal(false);
      history.push('/');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PureModal
        header="Вход"
        footer={
          <div className="footer-button__wrapper">
            <Button type="submit" title="Вход" disabled={isLoading} />
            <Button
              type="submit"
              title="Зарегистрироваться"
              bgColor="transparent"
              color="#2e7df6"
              onClick={() => setRegisterModel(true)}
            />
          </div>
        }
        isOpen={modal}
        closeButtonPosition="header"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
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
      </PureModal>
    </form>
  );
}
