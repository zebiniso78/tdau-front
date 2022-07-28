import { PhoneMask } from 'components/mask';
import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import Button from '../../../button';
import { useForm, Controller } from 'react-hook-form';
import { authApi } from 'services/api/pagesApi';
import { InputComponent } from 'components/input/controllerInput';
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function Login({
  setModal,
  setRegisterModel,
  handleCancel,
  isModalVisible,
  setIsModalVisible,
}) {
  const { t } = useTranslation();
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
    console.log(data);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('username', data?.username);
      formData.append('password', data?.password);
      let res = await authApi.login(formData);
      localStorage.setItem('token', res?.token);
      setIsLoading(false);
      setModal(false);
      if (localStorage.getItem('university_id')) {
        history.push('/university-admissions/personal-info');
      } else {
        history.push('/personal-info');
      }
      toast.success('Вы успешно вошли в систему');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      toast.error(e.msg);
    }
  };

  return (
    <>
      <Modal
        title={t('login-form')}
        visible={isModalVisible}
        footer={false}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <PhoneMask
            Controller={Controller}
            control={control}
            nameProps="username"
            title="Phone number"
            required={true}
            validators={['required', 'isNumber']}
          /> */}
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="username"
            plProps={t('username')}
            label={t('username') + '*'}
            required={true}
            className="registration-input"
            type="text"
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
          <div className="footer-button__wrapper">
            <Button type="submit" title={t('login')} disabled={isLoading} />
            <Button
              type="button"
              title={t('sign-up')}
              bgColor="transparent"
              color="#2e7df6"
              onClick={() => {
                setRegisterModel(true);
                setIsModalVisible(false);
              }}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
