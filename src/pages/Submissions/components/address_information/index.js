import React from 'react'
import { Title } from '../../../../styles/globalStyle'
import { AddressInfoProvider, AddressForm, Paragraph, CheckboxWrapper } from "./style"
import { useForm, Controller } from "react-hook-form"
import { CheckboxComponent } from '../../../../components/checkbox'
import { EntityForm } from './entityForm'
import { PhoneMask } from 'components/mask'


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
        <EntityForm />
        <Paragraph className='mt-2'>Укажите адрес, по которому вы постоянно проживаете.
          Если у вас есть другой временный адрес (например, студенческое общежитие),
          укажите его в разделе «Адрес для переписки» ниже.</Paragraph>
        <Title className='form-title mt-4'>Адрес для почтовых отправлений</Title>
        <Paragraph className='mt-3'>
          Ваш адрес для корреспонденции совпадает<br /> с вашим постоянным адресом?*
        </Paragraph>
        <CheckboxWrapper>
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
        <EntityForm />
        <Paragraph className='mt-2'>Большая часть нашей корреспонденции будет вестись
          по электронной почте, но если мы отправим вам что-либо по почте,
          мы будем использовать адрес, указанный вами в этом разделе. Если
          ваш адрес для корреспонденции является временным, сообщите нам дату,
          когда вы въехали и когда собираетесь уехать. Это поможет нам убедиться,
          что мы всегда отправляем корреспонденцию по правильному адресу.</Paragraph>
        <MaskInputWrapper>
          <Title className='form-title'>Номер телефона</Title>
          <PhoneMask
            Controller={Controller}
            control={control}
            nameProps='phone_number'
            title='Личный адрес элек.почты заявителя'
            required={true}
            validators={['required', 'isNumber']} />
        </MaskInputWrapper>

      </AddressForm>
    </AddressInfoProvider>
  )
}
