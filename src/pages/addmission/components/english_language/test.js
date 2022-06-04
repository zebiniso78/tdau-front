import Calendar from 'components/calendar';
import { CheckboxComponent } from 'components/checkbox';
import { InputComponent } from 'components/input/controllerInput';
import UserFormSelectComponent from 'components/select';
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Paragraph, Title } from 'styles/globalStyle';
import { CheckboxWrapper } from '../address_information/style';

export function Test() {
   const {
      control,
      formState: { errors },
   } = useForm();
   return (
      <>
         <div className='row mt-5 align-items-end'>
            <Title className='form-title'>Тест по английскому языку</Title>
            <div className='col-lg-3 col-sm-6 col-md-6 mt-3'>
               <CheckboxWrapper>
                  <Paragraph>Английский ваш родной язык?*</Paragraph>
                  <CheckboxComponent
                     Controller={Controller}
                     control={control}
                     name='yes'
                     label='Да' />
                  <CheckboxComponent
                     Controller={Controller}
                     control={control}
                     name='no'
                     label='Нет' />
               </CheckboxWrapper>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Если да, выберите из следующего списка тестов*"
                  name="depar_id"
                  placeholder="Другая квалификация"
                  disabled={false}
               />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
               <Calendar
                  Controller={Controller}
                  control={control}
                  label='Дата проведения теста*'
                  nameProps="enteredYear"
                  plProps='дд/мм/гггг'
                  format="DD.MM.YYYY"
                  className='calendar'
               />
               <div className='col-lg-1' />
            </div>
         </div>
         <div className='row align-items-end mt-4'>
            <div className="col-lg-3 col-md-6 col-sm-6">
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Общая оценка*"
                  name="depar_id"
                  placeholder="оценка"
                  disabled={false}
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Оценка прослушивания*"
                  name="depar_id"
                  placeholder="оценка"
                  disabled={false}
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Оценка чтения*"
                  name="depar_id"
                  placeholder="оценка"
                  disabled={false}
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Оценка письма*"
                  name="depar_id"
                  placeholder="оценка"
                  disabled={false}
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Если вы не сдаете экзамен по английскому языку, 
                  но имеете одну из следующих квалификаций, выберите ее из списка*"
                  name="depar_id"
                  placeholder="оценка"
                  disabled={false}
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
               <Calendar
                  Controller={Controller}
                  control={control}
                  label='Дата прохождения теста*'
                  nameProps="enteredYear"
                  plProps='дд/мм/гггг'
                  format="DD.MM.YYYY"
                  className='calendar'
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
               <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="school"
                  plProps=""
                  label='Полученная оценка или балл*'
                  className='mb-0'
               />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
               <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="school"
                  plProps=""
                  label='Если у вас есть экзамен по английскому 
                  языку или квалификация, которых нет в приведенных 
                  выше списках, предоставьте подробную информацию.*'
                  className='mb-0'
               />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 mt-3">
               <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="school"
                  plProps=""
                  label='Если у вас есть экзамен по английскому 
                  языку или квалификация, которых нет в приведенных 
                  выше списках, предоставьте подробную информацию*'
                  className='mb-0'
               />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
               <CheckboxWrapper>
                  <Paragraph>Ваша полная степень бакалавра преподавалась на английском языке?*</Paragraph>
                  <CheckboxComponent
                     Controller={Controller}
                     control={control}
                     name='yes'
                     label='Да' />
                  <CheckboxComponent
                     Controller={Controller}
                     control={control}
                     name='no'
                     label='Нет' />
               </CheckboxWrapper>
            </div>
         </div>
      </>
   )
}
