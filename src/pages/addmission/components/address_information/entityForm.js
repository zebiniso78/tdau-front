import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputComponent } from 'components/input/controllerInput';
import UserFormSelectComponent from 'components/select';
import { useTranslation } from 'react-i18next';

export function EntityForm() {
  const {
    control,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  return (
    <div className="row mt-3">
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="name"
          plProps={t('address-info-address1')}
          label={t('address-info-address1') + ' 1 ' + '*'}
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="surname"
          plProps="Адресная строка 2"
          label={t('address-info-address1') + ' 2 ' + '*'}
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <UserFormSelectComponent
          Controller={Controller}
          control={control}
          required={true}
          title={t('region') + '*'}
          name="depar_id"
          placeholder={t('region')}
          // options={departList}
          disabled={false}
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-3">
        <InputComponent
          Controller={Controller}
          control={control}
          nameProps="post_index2"
          plProps={t('post-index')}
          label={t('post-index')}
        />
      </div>
    </div>
  );
}
