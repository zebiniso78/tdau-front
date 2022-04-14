import React, { useEffect } from 'react';
import { InputComponent } from '../../../../components/input/controllerInput';
import { PassportInfoProvider, Title, Row, Col } from './style';
import { Controller, useForm } from 'react-hook-form';
import Calendar from '../../../../components/calendar';
import DragDrop from '../../../../components/dragDrop';
import { useState } from 'react';
import { ButtonsProvider } from '../../../../components/buttons/style';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { CustomMask } from 'components/mask/customMask';
import { admissionApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';
import moment from 'moment';
import { Error } from 'styles/globalStyle';

export default function PassportInformation() {
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [transcript, setTranscript] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    localStorage.setItem('step', 3);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('register_step', 3);
      formData.append('passport', transcript[0]);
      formData.append('passport_number', data?.name);
      formData.append(
        'passport_expire',
        moment(data?.enteredYear).format('YYYY-DD-MM')
      );
      await admissionApi.admissionPost(formData);
      toast.success("Паспортные данные успешно созданы")
      history.push('/address-info');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage?.getItem('step') < 2) {
      history.push('/personal-info');
    }
  }, []);

  return (
    <PassportInfoProvider onSubmit={handleSubmit(onSubmit)}>
      <Title>Паспортная информация</Title>
      <Row className="row align-items-start">
        <Col className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ marginTop: '9px' }}>
          {/* <InputComponent
            Controller={Controller}
            control={control}
            nameProps="name"
            plProps="Введите Номер паспорта"
            label="Номер паспорта*"
            className={
              errors && errors?.hasOwnProperty('name') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('name') && (
            <Error>Iltimos ma'lumotni kiriting!</Error>
          )} */}
          <CustomMask
            Controller={Controller}
            control={control}
            nameProps="name"
            mask="AA1111111"
            title="Номер паспорта*"
            required={true}
            placeholder="Введите Номер паспорта"
            className={
              errors && errors?.hasOwnProperty('name') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('name') && (
            <Error>Iltimos ma'lumotni kiriting!</Error>
          )}
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-6 col-12">
          <Calendar
            Controller={Controller}
            control={control}
            label="Срок действия паспорта*"
            nameProps="enteredYear"
            plProps="дд/мм/гггг"
            format="DD.MM.YYYY"
            className={
              errors && errors?.hasOwnProperty('enteredYear')
                ? 'calendar-error'
                : 'calendar'
            }
            required={true}
          />
          {errors && errors?.hasOwnProperty('enteredYear') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </Col>
      </Row>
      <Row className="row">
        <Col className="col-lg-8 col-md-6 col-sm-6 col-12 mt-3">
          <p style={{ padding: '0' }}>
            Пожалуйста, загрузите копию вашего действующего паспорта*
          </p>
          <DragDrop
            name="transcript"
            inputId="transcript"
            files={transcript}
            setFile={setTranscript}
            required
            className="p-0"
          />
        </Col>
      </Row>
      <Col className="col-10" />
      <ButtonsProvider>
        <CancelBtnComponent
          name="Назад"
          className="prev-btn"
          onClick={() => history.push('/academic-info')}
        />
        {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
        <NextBtnComponent
          name="Продолжить"
          className="next-btn"
          type="submit"
        />
      </ButtonsProvider>
    </PassportInfoProvider>
  );
}
