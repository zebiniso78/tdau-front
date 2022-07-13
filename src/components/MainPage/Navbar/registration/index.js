import React, { useState } from 'react';
import { RegistrationProvider } from './style';
import Button from '../../../button';
import { InputComponent } from 'components/input/controllerInput';
import { useForm, Controller } from 'react-hook-form';
import { PhoneMask } from 'components/mask';
import { authApi } from 'services/api/pagesApi';
import { Modal } from 'antd';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function Registration({
  setConfirmModel,
  setRegisterModel,
  registerModel,
  setPhoneNumber,
}) {
  const { t } = useTranslation();
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
      const res = await authApi.registration(formData);
      console.log(res);
      // if (res) {
      setRegisterModel(false);
      setConfirmModel(true);
      setIsLoading(false);
      // }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      toast.error(e?.msg);
    }
  }

  const handleCancel = () => {
    setRegisterModel(false);
  };
  return (
    <Modal
      title={t('sign-up-form')}
      visible={registerModel}
      footer={false}
      onCancel={handleCancel}
    >
      <RegistrationProvider onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="username"
          plProps={t('username')}
          label={t('username') + '*'}
          required={true}
          className="registration-input"
        />
        <InputComponent
          Controller={Controller}
          control={control}
          require={true}
          nameProps="email"
          plProps={t('email')}
          label={t('email') + '*'}
          className="registration-input"
          type="email"
        />
        <PhoneMask
          Controller={Controller}
          control={control}
          nameProps={t('phone')}
          title={t('phone') + '*'}
          required={true}
          validators={['required', 'isNumber']}
        />
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="password"
          plProps={t('password')}
          label={t('password') + '*'}
          required={true}
          className="registration-input"
          type="password"
        />
        <Button
          type="submit"
          title={t('submit')}
          disabled={isLoading}
          // onClick={() => {
          //   setConfirmModel(true);
          //   setRegisterModel(false);
          // }}
        />
      </RegistrationProvider>
    </Modal>
  );
}
