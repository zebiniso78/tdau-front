import React from 'react'
import { Title } from '../../../../styles/globalStyle'
import { AddressInfoProvider, AddressForm, Paragraph } from "./style"
import { InputComponent } from '../../../../components/input/controllerInput'
import { useForm, Controller } from "react-hook-form"
import UserFormSelectComponent from '../../../../components/select'


export function AddressInformation() {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <AddressInfoProvider>
      <Title>Адресаная информация</Title>
      <Paragraph>Пожалуйста, укажите ваши контактные данные ниже.
        Если какая-либо информация, которую вы введете ниже,
        изменится в процессе приема, вам следует связаться с
        приемной комиссией, чтобы ваша запись была обновлена.</Paragraph>
      <AddressForm>
        <Title className='form-title'>Адрес постоянного проживания</Title>
        <div className='row'>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="name"
              plProps="Адресная строка 1"
              label='Адресная строка 1*'
            />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="surname"
              plProps="Адресная строка 2"
              label='Адресная строка 2*'
            />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Город*"
              name="depar_id"
              placeholder="Город"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Город*"
              name="depar_id"
              placeholder="Район"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt-3'>
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="index"
              plProps="Введите Номер паспорта"
              label='Почтовый индекс'
            />
          </div>
        </div>
        <Paragraph className='mt-2'>Укажите адрес, по которому вы постоянно проживаете.
          Если у вас есть другой временный адрес (например, студенческое общежитие),
          укажите его в разделе «Адрес для переписки» ниже.</Paragraph>
          <Title className='form-title mt-4'>Адрес для почтовых отправлений</Title>
      </AddressForm>
    </AddressInfoProvider>
  )
}
