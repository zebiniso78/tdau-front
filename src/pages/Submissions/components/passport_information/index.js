import React from 'react'
import { InputComponent } from '../../../../components/input/controllerInput'
import { PassportInfoProvider, PassportForm, Title } from "./style"
import { Controller, useForm } from 'react-hook-form';
import Calendar from '../../../../components/calendar';
import DragDrop from '../../../../components/dragDrop';
import { useState } from 'react';
import { Col4, Col8, Row, Col12, Col10 } from '../../../../common/grid';
import { ButtonsProvider } from '../../../../components/buttons/style';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';


export function PassportInformation() {
  const {
    control,
    formState: { errors },
  } = useForm();
  const [transcript, setTranscript] = useState([])
  return (
    <PassportInfoProvider>
      <Title>Паспортная информация</Title>
      <Row>
        <Col4>
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="name"
            plProps="Введите Номер паспорта"
            label='Номер паспорта*'
          />
        </Col4>
        <Col4>
          <Calendar
            Controller={Controller}
            control={control}
            label='Срок действия паспорта*'
            nameProps="enteredYear"
            plProps='дд/мм/гггг'
            format="DD.MM.YYYY"
            className='calendar'
          />
        </Col4>
      </Row>
      <Row>
        <Col10 className='mt-3'>
          <p style={{padding: '0'}}>Пожалуйста, загрузите копию вашего действующего паспорта*</p>
          <DragDrop
            name="transcript"
            inputId="transcript"
            files={transcript}
            setFile={setTranscript}
            required
            className='p-0' />
        </Col10>
      </Row>
      <div className='col-10'></div>
      <ButtonsProvider>
        <CancelBtnComponent name='Назад' className='prev-btn' />
        <NextBtnComponent name='Продолжить' className='next-btn' />
      </ButtonsProvider>
    </PassportInfoProvider>
  )
}
