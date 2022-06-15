import React, { useEffect, useMemo, useState } from 'react';
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
import { fetchData } from 'hooks/useFetch';
import { LoaderComponent } from 'components/loader';

export default function AddressInformation() {
  const history = useHistory();
  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [regions, setRegions] = useState([]);
  const [district, setDistrict] = useState([]);
  const [postDistrict, setPostDistrict] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [defaultValues, setDefaultValues] = useState(undefined);
  const [isFetch, setIsFetch] = useState(true)
  const { getRegions } = useGetList({
    setRegions,
  });
  const { onSubmit } = useSend({ setIsLoading, isChecked })
  useEffect(() => {
    getRegions();
    fetchData(admissionApi.admissionGetForign(null), setDefaultValues, setIsFetch)
  }, []);
  useEffect(() => {
    if (watch('regionID')?.value !== undefined) getDistrict();
  }, [watch('regionID')?.value]);
  useEffect(() => {
    if (watch('postRegion')?.value !== undefined) getPostDistrict()
  }, [watch('postRegion')?.value])
  useMemo(() => {
    // setIsFetch(true)
    if (defaultValues === undefined || (defaultValues?.region == null
      && defaultValues?.district == null
      && defaultValues?.post_district == null
      && defaultValues?.post_region == null)) {
      console.log('null')
    } else {
      reset({
        address1: defaultValues?.adress1,
        address2: defaultValues?.adress2,
        post_address1: defaultValues?.post_adress1,
        post_address2: defaultValues?.post_adress2,
        regionID: {
          label: regions?.find(item => item?.label === defaultValues?.region)?.label,
          value: regions?.find(item => item?.label === defaultValues?.region)?.value,
        },
        districtID: {
          label: district?.find(item => item?.label === defaultValues?.district)?.label,
          value: district?.find(item => item?.label === defaultValues?.district)?.value,
        },
        postRegion: {
          label: regions?.find(item => item?.label === defaultValues?.post_region)?.label,
          value: regions?.find(item => item?.label === defaultValues?.post_region)?.value
        },
        postDistrict: {
          label: postDistrict?.find(item => item?.label === defaultValues?.post_district)?.label,
          value: postDistrict?.find(item => item?.label === defaultValues?.post_district)?.value
        },
        post_index: defaultValues?.post_index,
        post_index2: defaultValues?.post_index2,
        phone: defaultValues?.phone,
        email: defaultValues?.email,
      })
    }
    // setIsFetch(false)
  }, [isFetch, defaultValues, regions])
  console.log(defaultValues, 'defaultValues')
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
    if (localStorage?.getItem('step') < 3) {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  useEffect(() => {
    if (defaultValues?.post_address1 != null &&
      defaultValues?.post_address2 != null &&
      defaultValues?.post_index2 != null &&
      defaultValues?.post_region != null &&
      defaultValues?.post_district != null
    ) {
      setIsChecked(true)
    }
  }, [defaultValues])
  console.log(isChecked)
  function handleChecked() {
    setIsChecked(!isChecked);
  }
  return (
    <AddressInfoProvider>
      <Title>Адресаная информация</Title>
      <Paragraph>
        Пожалуйста, укажите ваши контактные данные ниже. Если какая-либо
        информация, которую вы введете ниже, изменится в процессе приема, вам
        следует связаться с приемной комиссией, чтобы ваша запись была
        обновлена.
      </Paragraph>
      {
        !isFetch ?
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
                onChange={handleChecked}
              />
              <label style={{ marginRight: 16 }}>
                Yes
              </label>
              <CustomCheckbox
                id="no"
                name="termsOfUse"
                checked={isChecked}
                onChange={handleChecked}
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
              <InputComponent
                Controller={Controller}
                control={control}
                nameProps="email"
                required={false}
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
          </AddressForm> : <LoaderComponent />
      }

    </AddressInfoProvider>
  );
}
