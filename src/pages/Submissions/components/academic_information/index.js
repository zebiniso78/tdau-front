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
import moment from 'moment';

export default function AcademicInformation() {
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
  const [faculty, setFaculty] = useState([]);

  const { getEducationForm, getFaculty, getEducationType } = useGetList({
    setEducationFormList,
    setEducationTypeList,
    setFaculty,
  });

  const onSubmit = async (data) => {
    localStorage.setItem('step', 2);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('education_form_id', data?.obuchenie?.value);
      formData.append('education_type_id', data?.tip_programma?.value);
      formData.append('faculty_id', data?.faculty?.value);
      formData.append(
        'accept_deadline',
        `${
          moment(data?.srok_priema[0]).format('YYYY') +
          '-' +
          moment(data?.srok_priema[1]).format('YYYY')
        }`
      );

      formData.append('register_step', 2);
      await admissionApi.admissionPost(formData);
      toast.success('Академические данные успешно созданы');
      history.push('/passport-info');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage?.getItem('step') > 0) {
      getEducationForm();
      getEducationType();
      getFaculty();
    } else {
      history.push('/personal-info');
    }
  }, []);
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
      <AcademicForm
        onSubmit={handleSubmit(onSubmit)}
        className="row align-items-end"
      >
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <TwoDate
            Controller={Controller}
            control={control}
            required={true}
            nameProps="srok_priema"
            plProps="гггг"
            format="YYYY"
            // className="calendar"
            className={
              errors && errors?.hasOwnProperty('srok_priema')
                ? 'calendar-error'
                : 'calendar'
            }
            label="Срок приема*"
            disabled={false}
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
            <Error className="calendar-error-tooltip">
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

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            required={true}
            title="Факультет*"
            name="faculty"
            placeholder="Выберите"
            options={faculty}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('faculty') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('faculty') && (
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
