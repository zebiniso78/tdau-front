import { CheckboxComponent } from 'components/checkbox'
import React from 'react'
import { Paragraph, Title } from 'styles/globalStyle'
import { CheckboxWrapper } from '../address_information/style'
import { QualificationProvider } from "./style"
import { Controller, useForm } from 'react-hook-form'
import UserFormSelectComponent from 'components/select'

export function Qualification() {
   const {
      control,
      formState: { errors },
   } = useForm();
   return (
      <QualificationProvider>
         <Title className='form-title mt-4'>Квалификация</Title>
         <Paragraph>
            Все студенты должны хорошо владеть английским языком.
            Раздел ниже, в дополнение к информации о вашей национальности,
            стране проживания и академической истории, позволит университету
            определить, требуется ли вам квалификация по английскому языку
            для обучения в Великобритании.
         </Paragraph>
         <div className='row mt-3' style={{ alignItems: 'flex-end' }}>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
               <CheckboxWrapper>
                  <Paragraph>Вы проводите тест по английскому языку?*</Paragraph>
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
            <div className='col-lg-7 col-md-6 col-sm-6 col-12'>
               <CheckboxWrapper>
                  <Paragraph>
                     Вы получили академическую квалификацию, эквивалентную
                     британской степени, которая была получена в стране,
                     которая определяется британскими визами и иммиграцией
                     как страна с большинством англоговорящих стран?*</Paragraph>
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
            <div className="col-lg-1"></div>
         </div>
         <div className='row'>
            <div className='col-lg-5 col-md-6 col-sm-6 col-12 mt-3'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Если да, пожалуйста, выберите свою страну*"
                  name="depar_id"
                  placeholder="Выберите"
                  disabled={false}
               />
            </div>
         </div>
      </QualificationProvider>
   )
}
