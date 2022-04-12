import React from 'react';
import UserFormSelectComponent from '../../../../components/select';
import {
  AcademicInfoProvider,
  AcademicInfoTitle,
  AcademicInfo,
  AcademicForm,
} from './style';
import { Controller, useForm } from 'react-hook-form';
import { ButtonsProvider } from '../../../../components/buttons/style';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { Error } from 'common/grid';

export function AcademicInformation() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  return (
    <AcademicInfoProvider>
      <AcademicInfoTitle>Академическая информация</AcademicInfoTitle>
      <AcademicInfo>
        <p>
          Вы не можете подать заявку на онлайн-степени Международного
          сельскохозяйственного университета, используя эту форму. Пожалуйста,
          ознакомьтесь с информацией о наших онлайн-программах на получение
          степени на http://www.iau.uz/study/online/
        </p>
        <p>
          <strong>
            Поля ниже должны быть заполнены в том порядке, в котором они
            появляются, поскольку каждый предоставленный вами ответ будет
            заполнять доступные варианты в следующем поле.
          </strong>
        </p>
      </AcademicInfo>
      <AcademicForm className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            required={true}
            title="Срок приема*"
            name="srok_priema"
            placeholder="Мистер"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('srok_priema') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('srok_priema') && (
            <Error className="select-error-tooltip">
              Iltimos malumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            required={true}
            title="тип обучения*"
            name="obuchenie"
            placeholder="Выберите"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('obuchenie') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('obuchenie') && (
            <Error className="select-error-tooltip">
              Iltimos malumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            required={true}
            title="тип программа*"
            name="tip_programma"
            placeholder="Выберите"
            // options={departList}
            disabled={false}
            className={
              errors &&
              errors?.hasOwnProperty('tip_programma') &&
              'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('tip_programma') && (
            <Error className="select-error-tooltip">
              Iltimos malumotni kiriting!
            </Error>
          )}
        </div>
        <ButtonsProvider>
          <CancelBtnComponent
            name="Отмена"
            className="prev-btn"
            onClick={() => history.push('/personal-info')}
          />
          <CancelBtnComponent name="Сахранит" className="save-btn" />
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            type="submit"
            onClick={() => history.push('/passport-info')}
          />
        </ButtonsProvider>
      </AcademicForm>
    </AcademicInfoProvider>
  );
}
