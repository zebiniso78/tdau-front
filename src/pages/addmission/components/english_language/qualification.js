import { CheckboxComponent } from 'components/checkbox';
import React from 'react';
import { Paragraph, Title } from 'styles/globalStyle';
import { CheckboxWrapper } from '../address_information/style';
import { QualificationProvider } from './style';
import { Controller, useForm } from 'react-hook-form';
import UserFormSelectComponent from 'components/select';
import { useTranslation } from 'react-i18next';

export function Qualification() {
  const {
    control,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  return (
    <QualificationProvider>
      <Title className="form-title mt-4">{t('qualification')}</Title>
      <Paragraph>{t('qualification-p1')}</Paragraph>
      <div className="row mt-3" style={{ alignItems: 'flex-end' }}>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <CheckboxWrapper>
            <Paragraph>{t('qualification-p2')}</Paragraph>
            <CheckboxComponent
              Controller={Controller}
              control={control}
              name="yes"
              label={t('yes')}
            />
            <CheckboxComponent
              Controller={Controller}
              control={control}
              name="no"
              label={t('no')}
            />
          </CheckboxWrapper>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-6 col-12">
          <CheckboxWrapper>
            <Paragraph>{t('qualification-p3')}</Paragraph>
            <CheckboxComponent
              Controller={Controller}
              control={control}
              name="yes"
              label={t('yes')}
            />
            <CheckboxComponent
              Controller={Controller}
              control={control}
              name="no"
              label={t('no')}
            />
          </CheckboxWrapper>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-6 col-12 mt-3">
          <UserFormSelectComponent
            Controller={Controller}
            control={control}
            required={true}
            title={t('qualification-select')}
            name="depar_id"
            placeholder="Выберите"
            disabled={false}
          />
        </div>
      </div>
    </QualificationProvider>
  );
}
