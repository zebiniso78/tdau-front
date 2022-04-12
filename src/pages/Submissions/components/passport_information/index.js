import React from 'react';
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

export function PassportInformation() {
  const history = useHistory();
  const {
    control,
    formState: { errors },
  } = useForm();

  const [transcript, setTranscript] = useState([]);

  return (
    <PassportInfoProvider>
      <Title>Паспортная информация</Title>
      <Row className="row">
        <Col className="col-lg-4 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="name"
            plProps="Введите Номер паспорта"
            label="Номер паспорта*"
          />
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-6 col-12">
          <Calendar
            Controller={Controller}
            control={control}
            label="Срок действия паспорта*"
            nameProps="enteredYear"
            plProps="дд/мм/гггг"
            format="DD.MM.YYYY"
            className="calendar"
          />
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
        <CancelBtnComponent name="Сахранит" className="save-btn" />
        <NextBtnComponent
          name="Продолжить"
          className="next-btn"
          onClick={() => history.push('/address-info')}
        />
      </ButtonsProvider>
    </PassportInfoProvider>
  );
}
