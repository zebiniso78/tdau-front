import React from 'react'
import { Title } from '../../../../styles/globalStyle'
import {
  AddressInfoProvider,
  AddressForm,
  Paragraph,
  CheckboxWrapper,
  MaskInputWrapper,
  AddressFooter
} from "./style"
import { useForm, Controller } from "react-hook-form"
import { CheckboxComponent } from '../../../../components/checkbox'
import { EntityForm } from './entityForm'
import { PhoneMask } from 'components/mask'
import { InputComponent } from 'components/input/controllerInput'
import { Link } from 'react-router-dom'
import { ButtonsProvider } from 'components/buttons/style'
import { CancelBtnComponent } from 'components/buttons/prev-btn'
import { NextBtnComponent } from 'components/buttons/next-btn'
import { useHistory } from 'react-router-dom'


export function AddressInformation() {
  const history = useHistory()
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
        <Paragraph className='mt-2'>Большая часть нашей корреспонденции будет вестись по электронной почте,
          но если мы отправим вам что-либо по почте, мы будем использовать адрес,
          указанный вами в этом разделе. Если ваш адрес для корреспонденции является
          временным, сообщите нам дату, когда вы въехали и когда собираетесь уехать.
          Это поможет нам убедиться, что мы всегда отправляем корреспонденцию по
          правильному адресу.</Paragraph>
        <MaskInputWrapper>
          <PhoneMask
            Controller={Controller}
            control={control}
            nameProps='personal_phone'
            title='Личный адрес элек.почты заявителя'
            required={true}
            validators={['required', 'isNumber']} />
        </MaskInputWrapper>
        <AddressFooter>
          <Title className='mt-4 form-title'>Адрес электронной почты</Title>
          <Paragraph className='mt-3'>Университет отправляет корреспонденцию по электронной почте,
            поэтому, пожалуйста, убедитесь, что ваш адрес электронной почты верен
            и что он будет действителен в течение всего процесса подачи заявки.
            Если вы являетесь зарубежным представителем, заполняющим эту форму
            от имени заявителя, укажите в этом разделе личный адрес электронной
            почты заявителя. Мы собрали контактные данные вашего отделения в другом
            месте приложения, и агентство будет продолжать получать корреспонденцию.</Paragraph>
          <div className='row'>
            <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
              <InputComponent
                Controller={Controller}
                control={control}
                nameProps="index"
                plProps="Введите Номер элек.почты"
                label='Личный адрес элек.почты заявителя*'
              />
            </div>
            <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
              <InputComponent
                Controller={Controller}
                control={control}
                nameProps="email"
                plProps="Введите Номер элек.почты"
                label='Подтвердите адрес электронной почты'
              />
            </div>
            <div className='col-lg-2' />
            <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
              <Paragraph className='footer-paragraph'>
                Университет отправляет большую часть корреспонденции
                по электронной почте, поэтому убедитесь, что ваш адрес
                электронной почты верен и является действительным в течение
                всего процесса подачи заявки.
              </Paragraph>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-6 col-12'>
              <Paragraph>
                <Link to='/address-info' className='nav-link'>Отправить СМС ещё раз</Link>
              </Paragraph>
            </div>
          </div>
        </AddressFooter>
        <ButtonsProvider>
          <CancelBtnComponent
            name='Назад'
            className='prev-btn'
            onClick={() => history.push("/passport-info")}
            type='button' />
          <NextBtnComponent
            name='Продолжить'
            className='next-btn'
            onClick={() => history.push("/education-qualifications")}
            type='submit' />
        </ButtonsProvider>
      </AddressForm>
    </AddressInfoProvider>
  )
}
