import React, { useEffect, useState } from 'react';
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
import { admissionApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';
import { useGetList } from '../hooks/useGetList';
import TwoDate from 'components/calendar/twoDate';

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
  const [isLoading, setIsLoading] = useState(false);
  const [educationFormList, setEducationFormList] = useState([]);
  const [educationTypeList, setEducationTypeList] = useState([]);

  const { getEducationForm, getEducationType } = useGetList({
    setEducationFormList,
    setEducationTypeList,
  });

  useEffect(() => {
    getEducationForm();
    getEducationType();
  }, []);
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('name', data?.name);
      // formData.append('surname', data?.surname);
      // formData.append('middle_name', data?.middle_name);
      // formData.append('birthdate', moment(data?.birthdate).format(dateFormat));
      // formData.append('gender_id', data?.genderID?.value);
      // formData.append('nationality', data?.nationalSelect?.label);
      // formData.append('country_birth', data?.countryBirth?.label);
      // formData.append('country_permanent', data?.countryPermanent?.label);

      formData.append('register_step', 2);
      await admissionApi.admissionPost(formData);
      toast.success('Successfully created');
      history.push('/passport-info');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg);
      setIsLoading(false);
    }
  };

  return (
    <AcademicInfoProvider onSubmit={handleSubmit(onSubmit)}>
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
          <TwoDate
            Controller={Controller}
            control={control}
            required={true}
            label="Срок приема*"
            name="srok_priema"
            placeholder="Мистер"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('srok_priema') && 'select-error'
            }
          />
          {/* <UserFormSelectComponent
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
          /> */}
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
            options={educationFormList}
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
            options={educationTypeList}
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
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            type="submit"
            disabled={isLoading}
            // onClick={() => history.push('/passport-info')}
          />
        </ButtonsProvider>
      </AcademicForm>
    </AcademicInfoProvider>
  );
}
