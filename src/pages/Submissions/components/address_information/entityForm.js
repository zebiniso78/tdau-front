import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputComponent } from 'components/input/controllerInput';
import UserFormSelectComponent from 'components/select';

export function EntityForm() {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="row mt-3">
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="name"
          plProps="Адресная строка 1"
          label="Адресная строка 1*"
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="surname"
          plProps="Адресная строка 2"
          label="Адресная строка 2*"
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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
      <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-3">
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="index"
          plProps="Введите Номер паспорта"
          label="Почтовый индекс"
        />
      </div>
    </div>
  );
}
