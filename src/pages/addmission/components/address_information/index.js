import React, { useEffect, useState } from 'react';
import { Error, Title } from '../../../../styles/globalStyle';
import {
  AddressInfoProvider,
  AddressForm,
  Paragraph,
  CheckboxWrapper,
  MaskInputWrapper,
  AddressFooter,
} from './style';
import { useForm, Controller } from 'react-hook-form';
import { PhoneMask } from 'components/mask';
import { InputComponent } from 'components/input/controllerInput';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { useGetList } from '../hooks/useGetList';
import UserFormSelectComponent, { SelectItem } from 'components/select';
import { admissionApi } from 'services/api/pagesApi';
import { useSend } from './ui-logic/useSend';
import { CustomCheckbox } from 'components/checkbox/custom.style';

export default function AddressInformation() {
  const history = useHistory();
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [regions, setRegions] = useState([]);
  const [district, setDistrict] = useState([]);
  const [postDistrict, setPostDistrict] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { getRegions } = useGetList({
    setRegions,
  });
  const { onSubmit } = useSend({ setIsLoading, isChecked })
  useEffect(() => {
    getRegions();
  }, []);
  async function getDistrict() {
    try {
      let payload = {
        name: watch('regionID')?.value,
      };
      const response = await admissionApi.district(payload);
      SelectItem(response, setDistrict);
    } catch (e) {
      console.log(e);
    }
  }
  async function getPostDistrict() {
    try {
      let payload = {
        name: watch('postRegion')?.value,
      };
      const response = await admissionApi.district(payload);
      SelectItem(response, setPostDistrict);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (watch('regionID')) {
      getDistrict();
    }
  }, [watch('regionID')]);
  useEffect(() => {
    if (watch('postRegion')) {
      getPostDistrict();
    }
  }, [watch('postRegion')]);

  useEffect(() => {
    if (localStorage?.getItem('step') < 3) {
      history.push('/university-admissions/personal-info');
    }
  }, []);

  return (
    <AddressInfoProvider>
      <Title>Адресаная информация</Title>
      <Paragraph>
        Пожалуйста, укажите ваши контактные данные ниже. Если какая-либо
        информация, которую вы введете ниже, изменится в процессе приема, вам
        следует связаться с приемной комиссией, чтобы ваша запись была
        обновлена.
      </Paragraph>
      <AddressForm onSubmit={handleSubmit(onSubmit)}>
        <Title className="form-title">Адрес постоянного проживания</Title>
        {/* <EntityForm  /> */}
        <div className="row align-items-end mt-3">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="address1"
              plProps="Адресная строка 1"
              label="Адресная строка 1*"
              className={
                errors && errors?.hasOwnProperty('address1') && 'input-error'
              }
            />
            {errors && errors?.hasOwnProperty('address1') && (
              <Error>Iltimos ma'lumotni kiriting!</Error>
            )}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="address2"
              plProps="Адресная строка 2"
              label="Адресная строка 2*"
              className={
                errors && errors?.hasOwnProperty('address2') && 'input-error'
              }
            />
            {errors && errors?.hasOwnProperty('address2') && (
              <Error>Iltimos ma'lumotni kiriting!</Error>
            )}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Город*"
              name="regionID"
              placeholder="Город"
              options={regions}
              disabled={false}
              className={
                errors && errors?.hasOwnProperty('regionID') && 'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('regionID') && (
              <Error className="select-error-tooltip">
                Iltimos ma'lumotni kiriting!
              </Error>
            )}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Район*"
              name="districtID"
              placeholder="Район"
              options={district}
              disabled={false}
              className={
                errors && errors?.hasOwnProperty('districtID') && 'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('districtID') && (
              <Error className="select-error-tooltip">
                Iltimos ma'lumotni kiriting!
              </Error>
            )}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-3">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="post_index"
              plProps="Введите Номер паспорта"
              label="Почтовый индекс"
              required={false}
            />
          </div>
        </div>
        <Paragraph className="mt-2">
          Укажите адрес, по которому вы постоянно проживаете. Если у вас есть
          другой временный адрес (например, студенческое общежитие), укажите его
          в разделе «Адрес для переписки» ниже.
        </Paragraph>
        <Title className="form-title mt-4">
          Адрес для почтовых отправлений
        </Title>
        <Paragraph className="mt-3">
          Ваш адрес для корреспонденции совпадает
          <br /> с вашим постоянным адресом?*
        </Paragraph>
        <CheckboxWrapper>
          <CustomCheckbox
            id="yes"
            name="termsOfUse"
            checked={!isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label style={{ marginRight: 16 }}>
            Yes
          </label>
          <CustomCheckbox
            id="no"
            name="termsOfUse"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label>
            No
          </label>

        </CheckboxWrapper>
        {
          isChecked && (
            <div className="row align-items-end mt-3">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="post_address1"
                  required={isChecked ? true : false}
                  plProps="Адресная строка 1"
                  label="Адресная строка 1*"
                  className={
                    errors && errors?.hasOwnProperty('post_address1') && 'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('post_address1') && (
                  <Error>Iltimos ma'lumotni kiriting!</Error>
                )}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="post_address2"
                  plProps="Адресная строка 2"
                  label="Адресная строка 2*"
                  required={isChecked ? true : false}
                  className={
                    errors && errors?.hasOwnProperty('post_address2') && 'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('post_address2') && (
                  <Error>Iltimos ma'lumotni kiriting!</Error>
                )}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Город*"
                  name="postRegion"
                  placeholder="Город"
                  required={isChecked ? true : false}
                  options={regions}
                  disabled={false}
                  className={
                    errors && errors?.hasOwnProperty('postRegion') && 'select-error'
                  }
                />
                {errors && errors?.hasOwnProperty('postRegion') && (
                  <Error className="select-error-tooltip">
                    Iltimos ma'lumotni kiriting!
                  </Error>
                )}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <UserFormSelectComponent
                  Controller={Controller}
                  control={control}
                  title="Район*"
                  name="postDistrict"
                  required={isChecked ? true : false}
                  placeholder="Район"
                  options={postDistrict}
                  disabled={false}
                  className={
                    errors && errors?.hasOwnProperty('postDistrict') && 'select-error'
                  }
                />
                {errors && errors?.hasOwnProperty('postDistrict') && (
                  <Error className="select-error-tooltip">
                    Iltimos ma'lumotni kiriting!
                  </Error>
                )}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-3">
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="post_index2"
                  plProps="Введите Номер паспорта"
                  label="Почтовый индекс"
                  required={isChecked ? true : false}
                />
              </div>
            </div>
          )
        }

        <Paragraph className="mt-2">
          Большая часть нашей корреспонденции будет вестись по электронной
          почте, но если мы отправим вам что-либо по почте, мы будем
          использовать адрес, указанный вами в этом разделе. Если ваш адрес для
          корреспонденции является временным, сообщите нам дату, когда вы
          въехали и когда собираетесь уехать. Это поможет нам убедиться, что мы
          всегда отправляем корреспонденцию по правильному адресу.
        </Paragraph>
        <MaskInputWrapper>
          <Title className="form-title">Номер телефона</Title>
          <PhoneMask
            Controller={Controller}
            control={control}
            nameProps="phone"
            title=""
            required={true}
            validators={['required', 'isNumber']}
          />
        </MaskInputWrapper>
        <Paragraph className="mt-2">
          Большая часть нашей корреспонденции будет вестись по электронной
          почте, но если мы отправим вам что-либо по почте, мы будем
          использовать адрес, указанный вами в этом разделе. Если ваш адрес для
          корреспонденции является временным, сообщите нам дату, когда вы
          въехали и когда собираетесь уехать. Это поможет нам убедиться, что мы
          всегда отправляем корреспонденцию по правильному адресу.
        </Paragraph>
        <MaskInputWrapper>
          {/* <PhoneMask
            Controller={Controller}
            control={control}
            nameProps="phone_a"
            title="Личный адрес элек.почты заявителя"
            required={true}
            validators={['required', 'isNumber']}
          /> */}
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="email"
            plProps="Елек.почты"
            label="Личный адрес элек.почты заявителя"
            className={
              errors && errors?.hasOwnProperty('email') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('email') && (
            <Error>Iltimos ma'lumotni kiriting!</Error>
          )}
        </MaskInputWrapper>
        {/* <AddressFooter>
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
        </AddressFooter> */}
        <ButtonsProvider>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            onClick={() => history.push('/passport-info')}
            type="button"
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            disabled={isLoading}
            // onClick={() => history.push('/education-qualifications')}
            type="submit"
          />
        </ButtonsProvider>
      </AddressForm>
    </AddressInfoProvider>
  );
}
