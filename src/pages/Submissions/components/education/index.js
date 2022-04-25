import React, { useState } from 'react';
import { Title } from 'styles/globalStyle';
import { EducationProvider, EducationForm } from './style';
import { useForm, Controller } from 'react-hook-form';
import { InputComponent } from 'components/input/controllerInput';
import UserFormSelectComponent from 'components/select';
import { EducationFooter } from './footer';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { useGetList } from '../hooks/useGetList';
import { useEffect } from 'react';
import { admissionApi } from 'services/api/pagesApi';
import moment from 'moment';
import Calendar from 'components/calendar';
import { Error } from 'styles/globalStyle';
import toast from 'react-hot-toast';

export default function Education() {
  const history = useHistory();
  const [qualifications, setQualifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState([]);
  const [upload, setUpload] = useState([]);

  const { getQualification } = useGetList({ setQualifications });
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    getQualification();
  }, []);
  const onSubmit = async (data) => {
    localStorage.setItem('step', 5);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('school', data?.school);
      formData.append('qualification', data?.qualification?.label);
      formData.append(
        'qualification_start',
        moment(data?.qualification_start).format('YYYY-MM-DD')
      );
      formData.append(
        'qualification_end',
        moment(data?.qualification_end).format('YYYY-MM-DD')
      );
      formData.append('qualification_info', transcript[0]);
      formData.append('qualification_diploma', upload[0]);
      formData.append('register_step', 5);
      await admissionApi.admissionPost(formData);
      toast.success('Образовательные квалификации успешно созданы');
      history.push('/supporting-info');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (localStorage?.getItem('step') < 4) {
      history.push('/personal-info');
    }
  }, []);
  return (
    <EducationProvider>
      <Title>Образование и квалификации</Title>
      <EducationForm onSubmit={handleSubmit(onSubmit)}>
        <Title className="form-title">Предыдущая школа или колледж</Title>
        <div className="row align-items-end mt-2">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="school"
              plProps="Школа/колледж"
              label="Школа/колледж*"
              // className="mb-0"
              className={
                errors && errors?.hasOwnProperty('school') && 'input-error'
              }
            />
            {errors && errors?.hasOwnProperty('school') && (
              <Error>Iltimos ma'lumotni kiriting!</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Получена квалификация*"
              name="qualification"
              placeholder="Район"
              options={qualifications}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('qualification') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('qualification') && (
              <Error className="select-error-tooltip">
                Iltimos ma'lumotni kiriting!
              </Error>
            )}
          </div>
          {/* <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="school"
              plProps="Школа/колледж"
              label='Если вы выбрали «Другая квалификация» из списка выше, укажите здесь тип квалификации'
              className='mb-0'
            />
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Основная тема*"
              name="qualifications"
              placeholder="Другая квалификация"
              // options={departList}
              disabled={false}
            />
          </div> */}
        </div>
        <div className="row align-items-end mt-3">
          {/* <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <InputComponent
               Controller={Controller}
               control={control}
               nameProps="school"
               plProps="Школа/колледж"
               label='Если вы выбрали «Другая квалификация» из списка выше, укажите здесь тип квалификации'
               className='mb-0'
            />
         </div> */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <Calendar
              Controller={Controller}
              control={control}
              label="Дата начала*"
              nameProps="qualification_start"
              plProps="дд/мм/гггг"
              format="DD.MM.YYYY"
              required={true}
              className={
                errors && errors?.hasOwnProperty('qualification_start')
                  ? 'calendar-error'
                  : 'calendar'
              }
            />
            {errors && errors?.hasOwnProperty('qualification_start') && (
              <Error className="select-error-tooltip">
                Iltimos ma'lumotni kiriting!
              </Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <Calendar
              Controller={Controller}
              control={control}
              label="Дата завершения*"
              nameProps="qualification_end"
              plProps="дд/мм/гггг"
              format="DD.MM.YYYY"
              required={true}
              className={
                errors && errors?.hasOwnProperty('qualification_end')
                  ? 'calendar-error'
                  : 'calendar'
              }
            />
            {errors && errors?.hasOwnProperty('qualification_end') && (
              <Error className="select-error-tooltip">
                Iltimos ma'lumotni kiriting!
              </Error>
            )}
          </div>
        </div>
        <EducationFooter
          transcript={transcript}
          setTranscript={setTranscript}
          upload={upload}
          setUpload={setUpload}
        />
        <ButtonsProvider>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            onClick={() => history.push('/address-info')}
            type="button"
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            // onClick={() => history.push('/supporting-info')}
            disabled={isLoading}
            type="submit"
          />
        </ButtonsProvider>
      </EducationForm>
    </EducationProvider>
  );
}
