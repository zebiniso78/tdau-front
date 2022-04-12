import React from 'react';
import { ButtonsProvider, PersonalInfoProvider, Error } from './style';
import UserFormSelectComponent from '../../../../components/select';
import { Controller, useForm } from 'react-hook-form';
import { InputComponent } from '../../../../components/input/controllerInput';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from 'react-router-dom';

export function PersonalInfo() {
  const history = useHistory();
  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  console.log(errors, 'error');
  const onSubmit = (data) => {
    console.log(data, 'dataaaaaa');
  };
  return (
    <PersonalInfoProvider
      className="container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row align-items-end">
        <h4>Персональные данные</h4>
        {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Кто ты*"
            name="depar_id"
            placeholder="Мистер"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div> */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="name"
            plProps="Введите Имя"
            label="Имя*"
            className={
              errors && errors?.hasOwnProperty('name') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('name') && (
            <Error>Iltimos ismingizni kiriting!</Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="surname"
            plProps="Введите Фамилия"
            label="Фамилия*"
            className={
              errors && errors?.hasOwnProperty('surname') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('surname') && (
            <Error>Iltimos familiyangizni kiriting!</Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="middle_name"
            plProps="Введите oтчества"
            label="Отчества*"
            className={
              errors && errors?.hasOwnProperty('middle_name') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('middle_name') && (
            <Error>Iltimos sharifingizni kiriting!</Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Дата рождения*"
            name="depar_id"
            required={false}
            placeholder="Мистер"
            // options={departList}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
            disabled={false}
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Пол*"
            name="depar_id"
            required={false}
            placeholder="Мистер"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Страна рождения*"
            name="depar_id"
            placeholder="Выберите"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Национальность*"
            name="depar_id"
            placeholder="Мистер"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Страна постоянного проживания*"
            name="depar_id"
            placeholder="Выберите"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Текущее место жительства*"
            name="depar_id"
            placeholder="Выберите"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div>
      </div>
      <ButtonsProvider>
        <CancelBtnComponent name="Отмена" className="prev-btn" />
        <CancelBtnComponent name="Сахранит" className="save-btn" />
        <NextBtnComponent
          name="Продолжить"
          className="next-btn"
          type="submit"
          // onClick={() => history.push("/academic-info")}
        />
      </ButtonsProvider>
    </PersonalInfoProvider>
  );
}
