import { PhoneMask } from 'components/mask';
import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import Button from '../../../button';
import { useForm, Controller } from 'react-hook-form';
import { authApi } from 'services/api/pagesApi';
import { InputComponent } from 'components/input/controllerInput';
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';
import toast from 'react-hot-toast'

export function Login({ setModal, setRegisterModel, handleCancel, isModalVisible, setIsModalVisible }) {
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
    console.log(data)
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('username', data?.username);
      formData.append('password', data?.password);
      let res = await authApi.login(formData);
      localStorage.setItem('token', res?.token);
      setIsLoading(false);
      setModal(false);
      history.push('/personal-info');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      toast.error(e.msg);
    }
  };




  return (
    <>
      <Modal title="Login Form" visible={isModalVisible} footer={false} onCancel={handleCancel} >
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
            plProps="Enter username"
            label="Username*"
            required={true}
            className="registration-input"
            type="text"
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
          <div className="footer-button__wrapper">
            <Button type="submit" title="Вход" disabled={isLoading} />
            <Button
              type="submit"
              title="Зарегистрироваться"
              bgColor="transparent"
              color="#2e7df6"
              onClick={() => {
                setRegisterModel(true)
                setIsModalVisible(false)
              }}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
