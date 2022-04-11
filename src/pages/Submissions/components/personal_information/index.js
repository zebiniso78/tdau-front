import React from 'react'
import { ButtonsProvider, PersonalInfoProvider } from './style'
import UserFormSelectComponent from "../../../../components/select"
import { Controller, useForm } from 'react-hook-form';
import { InputComponent } from '../../../../components/input/controllerInput';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from "react-router-dom"


export function PersonalInfo() {
   const history = useHistory()
   const {
      handleSubmit,
      watch,
      reset,
      control,
      formState: { errors },
   } = useForm();
   console.log(errors, 'error')
   const onSubmit = (data) => {
      console.log(data, 'dataaaaaa')
   }
   return (
      <PersonalInfoProvider className='container' onSubmit={handleSubmit(onSubmit)}>
         <div className='row'>
            <h4>Персональные данные</h4>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  required={true}
                  title="Кто ты*"
                  name="depar_id"
                  placeholder="Мистер"
                  // options={departList}
                  disabled={false}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="name"
                  plProps="Введите Имя"
                  label='Имя*'
                  required={true}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="surname"
                  re
                  plProps="Введите Фамилия"
                  label='Фамилия*'
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="surname"
                  plProps="Введите oтчества"
                  label='Отчества*'
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Дата рождения*"
                  name="depar_id"
                  required={false}
                  placeholder="Мистер"
                  // options={departList}
                  disabled={false}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Пол*"
                  name="depar_id"
                  required={false}
                  placeholder="Мистер"
                  // options={departList}
                  disabled={false}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Страна рождения*"
                  name="depar_id"
                  placeholder="Выберите"
                  // options={departList}
                  disabled={false}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Национальность*"
                  name="depar_id"
                  placeholder="Мистер"
                  // options={departList}
                  disabled={false}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Страна постоянного проживания*"
                  name="depar_id"
                  placeholder="Выберите"
                  // options={departList}
                  disabled={false}
               />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
               <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Текущее место жительства*"
                  name="depar_id"
                  placeholder="Выберите"
                  // options={departList}
                  disabled={false}
               />
            </div>
         </div>
         <ButtonsProvider>
            <CancelBtnComponent name='Отмена' className='prev-btn' />
            <NextBtnComponent
               name='Продолжить'
               className='next-btn'
               type='submit'
            // onClick={() => history.push("/academic-info")}
            />
         </ButtonsProvider>
      </PersonalInfoProvider>

   )
}
