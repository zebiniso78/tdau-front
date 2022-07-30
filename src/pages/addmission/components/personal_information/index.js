import React, { useMemo, useState } from 'react';
import { ButtonsProvider, PersonalInfoProvider, Error } from './style';
import UserFormSelectComponent from '../../../../components/select';
import { Controller, useForm } from 'react-hook-form';
import { InputComponent } from '../../../../components/input/controllerInput';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import Calendar from 'components/calendar';
import { useGetList } from '../hooks/useGetList';
import { useEffect } from 'react';
import moment from 'moment';
import toast from 'react-hot-toast';
import { admissionApi } from 'services/api/pagesApi';
import { fetchData } from 'hooks/useFetch';
import { LoaderComponent } from 'components/loader';
import DragDrop from 'components/dragDrop';
import { Attachments } from 'hooks/useAttachment';
import { FileUpload } from 'components/fileUpload';
import { useTranslation } from 'react-i18next';

export default function PersonalInfo() {
  let dateFormat = 'YYYY-MM-DD';
  const history = useHistory();
  const { t } = useTranslation();

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  let steps = localStorage.getItem('step');
  const [nationalities, setNationalities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [genders, setGenders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetch, setIsFetch] = useState(true);
  const [defaultValues, setDefaultValues] = useState(undefined);
  const [userPicture, setUserPicture] = useState([]);
  const [attachImage, setAttachImage] = useState(true);
  const { getNationality, getCountries, getGenders } = useGetList({
    setNationalities,
    setCountries,
    setGenders,
  });
  useEffect(() => {
    setIsFetch(true);
    getNationality();
    getCountries();
    getGenders();
    setIsFetch(false);
  }, []);

  async function getData() {
    try {
      setIsFetch(true);
      const response = await admissionApi.admissionGetForign(null);
      setDefaultValues(response);
      setIsFetch(false);
    } catch (e) {
      console.log(e);
      setIsFetch(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useMemo(() => {
    if (
      defaultValues === undefined ||
      (defaultValues?.surname == null && defaultValues?.middle_name == null)
    ) {
      console.log('hech nima');
    } else {
      reset({
        ...defaultValues,
        countryBirth: {
          label: countries?.find(
            (item) => item?.label === defaultValues?.country_birth
          )?.label,
          value: countries?.find(
            (item) => item?.label === defaultValues?.country_birth
          )?.value,
        },
        nationalSelect: {
          label: nationalities?.find(
            (item) => item?.label === defaultValues?.nationality
          )?.label,
          value: nationalities?.find(
            (item) => item?.label === defaultValues?.nationality
          )?.value,
        },
        currentCountry: {
          label: countries?.find(
            (item) => item?.label === defaultValues?.current_country
          )?.label,
          value: countries?.find(
            (item) => item?.label === defaultValues?.current_country
          )?.value,
        },
        countryPermanent: {
          label: countries?.find(
            (item) => item?.label === defaultValues?.country_permanent
          )?.label,
          value: countries?.find(
            (item) => item?.label === defaultValues?.country_permanent
          )?.value,
        },
        genderID: {
          label: genders?.find(
            (item) => item?.value === defaultValues?.gender_id
          )?.label,
          value: genders?.find(
            (item) => item?.value === defaultValues?.gender_id
          )?.value,
        },
        birthDate: moment(defaultValues?.birthDate)?.toDate(),
      });
    }
  }, [isFetch, defaultValues, countries, nationalities]);

  const onSubmit = async (data) => {
    localStorage.setItem('step', 1);
    console.log(data);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('name', data?.name);
      formData.append('surname', data?.surname);
      formData.append('middle_name', data?.middle_name);
      formData.append('birthdate', moment(data?.birthDate).format(dateFormat));
      formData.append('gender_id', data?.genderID?.value);
      formData.append('nationality', data?.nationalSelect?.label);
      formData.append('country_birth', data?.countryBirth?.label);
      formData.append('country_permanent', data?.countryPermanent?.label);
      formData.append('current_country', data?.currentCountry?.label);
      formData.append('personal_image', userPicture[0]);
      formData.append('register_step', 1);
      formData.append('university_id', localStorage.getItem('university_id'));
      await admissionApi.admissionPostForign(formData);
      toast.success('Личная информация успешно создана');
      history.push('/university-admissions/academic-info');
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg || t('error-text'));
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem('step', 0);
  // }, []);
  return (
    <PersonalInfoProvider
      className="container"
      onSubmit={handleSubmit(onSubmit)}
    >
      {!isFetch ? (
        <div className="row">
          <h4>{t('personal-info')}</h4>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="name"
              plProps={t('personal-name')}
              label={t('personal-name') + '*'}
              className={
                errors && errors?.hasOwnProperty('name') && 'input-error'
              }
            />
            {errors && errors?.hasOwnProperty('name') && (
              <Error>{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="surname"
              plProps={t('personal-surname')}
              label={t('personal-surname') + '*'}
              className={
                errors && errors?.hasOwnProperty('surname') && 'input-error'
              }
            />
            {errors && errors?.hasOwnProperty('surname') && (
              <Error>{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="middle_name"
              plProps={t('middle-surname')}
              label={t('middle-surname') + '*'}
              className={
                errors && errors?.hasOwnProperty('middle_name') && 'input-error'
              }
            />
            {errors && errors?.hasOwnProperty('middle_name') && (
              <Error>{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <Calendar
              Controller={Controller}
              control={control}
              nameProps="birthDate"
              label={t('birth-date') + '*'}
              plProps="dd/mm/yyyy"
              format="DD.MM.YYYY"
              required={true}
              className={
                errors && errors?.hasOwnProperty('birthDate')
                  ? 'calendar-error calendar'
                  : 'calendar'
              }
            />
            {errors && errors?.hasOwnProperty('birthDate') && (
              <Error className="select-error-tooltip">{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title={t('gender')}
              name="genderID"
              required={false}
              placeholder={t('gender')}
              options={genders}
              disabled={false}
              className={
                errors && errors?.hasOwnProperty('genderID') && 'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('genderID') && (
              <Error className="select-error-tooltip">{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title={t('cauntry-birth')}
              name="countryBirth"
              placeholder={t('cauntry-birth')}
              options={countries}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('countryBirth') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('countryBirth') && (
              <Error className="select-error-tooltip">{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title={t('nationality') + ' *'}
              name="nationalSelect"
              placeholder={t('nationality') + ' *'}
              options={nationalities}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('nationalSelect') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('nationalSelect') && (
              <Error className="select-error-tooltip">{t('error-field')}</Error>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title={t('parment-country') + '*'}
              name="countryPermanent"
              placeholder={t('parment-country')}
              options={countries}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('countryPermanent') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('countryPermanent') && (
              <Error className="select-error-tooltip">{t('error-field')}</Error>
            )}
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title={t('current-country') + '*'}
              name="currentCountry"
              placeholder={t('current-country')}
              options={countries}
              disabled={false}
              className={
                errors &&
                errors?.hasOwnProperty('currentCountry') &&
                'select-error'
              }
            />
            {errors && errors?.hasOwnProperty('currentCountry') && (
              <Error className="select-error-tooltip">{t('error-field')}</Error>
            )}
          </div> */}
          <div className="col-xl-8 col-md-6  ">
            <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
              {t('pic3x4')}
            </p>

            {Attachments(defaultValues?.attachments, 'personal image') !==
              false && attachImage ? (
              <div style={{ maxWidth: '60%' }}>
                <FileUpload
                  path={
                    Attachments(defaultValues?.attachments, 'personal image')
                      ?.path
                  }
                  ext={
                    Attachments(defaultValues?.attachments, 'personal image')
                      ?.ext
                  }
                  setState={setAttachImage}
                />
              </div>
            ) : (
              <DragDrop
                name="transcript"
                inputId="transcript"
                files={userPicture}
                setFile={setUserPicture}
                required
                accept="image/*"
                className="p-0"
              />
            )}
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}

      <ButtonsProvider>
        <CancelBtnComponent name={t('back')} className="prev-btn" />
        {/* <CancelBtnComponent
          name="Сахранит"
          className="save-btn"
          disabled={isLoading}
          // type="submit"
        /> */}
        <NextBtnComponent
          name={t('submit')}
          className="next-btn"
          type="submit"
          disabled={isLoading}
          // onClick={() => history.push('/academic-info')}
        />
      </ButtonsProvider>
    </PersonalInfoProvider>
  );
}
