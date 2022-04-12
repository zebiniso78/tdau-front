import React, { useState } from 'react';
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
import toast, { Toaster } from 'react-hot-toast';
import { admissionApi } from 'services/api/pagesApi';

export function PersonalInfo() {
  let dateFormat = 'DD.MM.YYYY';
  const history = useHistory();
  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [nationalities, setNationalities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [genders, setGenders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getNationality, getCountries, getGenders } = useGetList({
    setNationalities,
    setCountries,
    setGenders,
  });
  useEffect(() => {
    getNationality();
    getCountries();
    getGenders();
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('name', data?.name);
      formData.append('surname', data?.surname);
      formData.append('middle_name', data?.middle_name);
      formData.append('birthdate', moment(data?.birthdate).format(dateFormat));
      formData.append('gender_id', data?.genderID?.value);
      formData.append('nationality', data?.nationalSelect?.label);
      formData.append('country_birth', data?.countryBirth?.label);
      formData.append('country_permanent', data?.countryPermanent?.label);
      formData.append('register_step', 1);
      await admissionApi.admissionPost(formData);
      history.push('/academic-info');
      // toast.success("Successfully created")
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg);
      setIsLoading(false);
    }
  };
  return (
    <PersonalInfoProvider
      className="container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row align-items-end">
        <h4>Персональные данные</h4>
        {/* <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Кто ты*"
            name="depar_id"
            placeholder="Мистер"
            // options={departList}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )}
        </div> */}
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="name"
            plProps="Введите Имя"
            label="Имя*"
            className={
              errors && errors?.hasOwnProperty('name') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('name') && (
            <Error>Iltimos ma'lumotni kiriting!</Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="surname"
            plProps="Введите Фамилия"
            label="Фамилия*"
            className={
              errors && errors?.hasOwnProperty('surname') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('surname') && (
            <Error>Iltimos ma'lumotni kiriting!</Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <InputComponent
            Controller={Controller}
            control={control}
            nameProps="middle_name"
            plProps="Введите oтчества"
            label="Отчества*"
            className={
              errors && errors?.hasOwnProperty('middle_name') && 'input-error'
            }
          />
          {errors && errors?.hasOwnProperty('middle_name') && (
            <Error>Iltimos ma'lumotni kiriting!</Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          {/* <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Дата рождения*"
            name="depar_id"
            required={false}
            placeholder="Мистер"
            // options={departList}
            className={
              errors && errors?.hasOwnProperty('depar_id') && 'select-error'
            }
            disabled={false}
          />
          {errors && errors?.hasOwnProperty('depar_id') && (
            <Error className="select-error-tooltip">
              Iltimos kafedrani kiriting!
            </Error>
          )} */}
          <Calendar
            Controller={Controller}
            control={control}
            required={true}
            label="Дата рождения*"
            nameProps="birthdate"
            plProps="дд/мм/гггг"
            format="DD.MM.YYYY"
            // className="calendar"
            className={
              errors && errors?.hasOwnProperty('birthdate')
                ? 'calendar-error'
                : 'calendar'
            }
          />
          {errors && errors?.hasOwnProperty('birthdate') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Пол*"
            name="genderID"
            required={false}
            placeholder="Мистер"
            options={genders}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('genderID') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('genderID') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Страна рождения*"
            name="countryBirth"
            placeholder="Выберите"
            options={countries}
            disabled={false}
            className={
              errors && errors?.hasOwnProperty('countryBirth') && 'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('countryBirth') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Национальность*"
            name="nationalSelect"
            placeholder="Мистер"
            options={nationalities}
            disabled={false}
            className={
              errors &&
              errors?.hasOwnProperty('nationalSelect') &&
              'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('nationalSelect') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Страна постоянного проживания*"
            name="countryPermanent"
            placeholder="Выберите"
            options={countries}
            disabled={false}
            className={
              errors &&
              errors?.hasOwnProperty('countryPermanent') &&
              'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('countryPermanent') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            title="Текущее место жительства*"
            name="currentCountry"
            placeholder="Выберите"
            options={countries}
            disabled={false}
            className={
              errors &&
              errors?.hasOwnProperty('currentCountry') &&
              'select-error'
            }
          />
          {errors && errors?.hasOwnProperty('currentCountry') && (
            <Error className="select-error-tooltip">
              Iltimos ma'lumotni kiriting!
            </Error>
          )}
        </div>
      </div>
      <ButtonsProvider>
        <CancelBtnComponent name="Отмена" className="prev-btn" />
        {/* <CancelBtnComponent
          name="Сахранит"
          className="save-btn"
          disabled={isLoading}
          // type="submit"
        /> */}
        <NextBtnComponent
          name="Продолжить"
          className="next-btn"
          type="submit"
          disabled={isLoading}
          // onClick={() => history.push('/academic-info')}
        />
        <Toaster />
      </ButtonsProvider>
    </PersonalInfoProvider>
  );
}
