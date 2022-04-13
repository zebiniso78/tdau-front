import React from 'react'
import { InputComponent } from 'components/input/controllerInput'
import Calendar from 'components/calendar';
import { useForm, Controller } from 'react-hook-form'
import { CheckboxWrapper } from '../address_information/style';
import { CheckboxComponent } from 'components/checkbox';
import { Paragraph } from "styles/globalStyle"

export function EducationBody() {
   const {
      control,
      watch,
      formState: { errors },
   } = useForm();
   console.log(watch("yes"))
   return (
      <div className='row align-items-end mt-3'>
         <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <InputComponent
               Controller={Controller}
               control={control}
               nameProps="school"
               plProps="Школа/колледж"
               label='Если вы выбрали «Другая квалификация» из списка выше, укажите здесь тип квалификации'
               className='mb-0'
            />
         </div>
         <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <Calendar
               Controller={Controller}
               control={control}
               label='Дата начала*'
               nameProps="starting_date"
               plProps='дд/мм/гггг'
               format="DD.MM.YYYY"
               className='calendar'
            />
         </div>
         <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <Calendar
               Controller={Controller}
               control={control}
               label='Дата завершения*'
               nameProps="end_date"
               plProps='дд/мм/гггг'
               format="DD.MM.YYYY"
               className='calendar'
            />
         </div>
         <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-3'>
            <Calendar
               Controller={Controller}
               control={control}
               label='Дата завершения*'
               nameProps="birth_date"
               plProps='дд/мм/гггг'
               format="DD.MM.YYYY"
               className='calendar'
            />
         </div>
         <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-3'>
            <CheckboxWrapper>
               <Paragraph>Есть ли у вас какие-либо другие квалификации*</Paragraph>
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
   )
}
