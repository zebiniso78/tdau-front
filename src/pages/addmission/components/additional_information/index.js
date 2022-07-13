import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MemoizedCheckbox, CheckboxComponent } from 'components/checkbox';
import {
  AdditionalInfoProvider,
  CheckboxWrapper,
  Paragraph,
  ButtonWrapper,
} from './style';
import { Controller, useForm } from 'react-hook-form';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import Modal from '../../../../components/modal';
import { admissionApi } from 'services/api/pagesApi';
import { useTranslation } from 'react-i18next';

export default function AdditionalInformation() {
  const history = useHistory();
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [addMissionID, setAddMissionID] = useState(null);
  const {
    control,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    async function AdditionalInfo() {
      try {
        const res = await admissionApi.admissionGetForign(null);
        setAddMissionID(res?.id);
        console.log(res, 'res');
      } catch (e) {
        console.log(e);
      }
    }
    AdditionalInfo();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('step', 8);
    try {
      let formData = new FormData();
      formData.append('adm_id', addMissionID);
      admissionApi.admissionConfirmForeign(formData);
      // toast.success("Addmission successfully created")
      setModal(true);
      setTimeout(() => {
        history.push('/admission');
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (localStorage?.getItem('step') < 7) {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  return (
    <>
      <AdditionalInfoProvider onSubmit={handleSubmit} className="container">
        <div className="row">
          <h4>{t('additional-info-title')}</h4>
          <p>{t('additional-info-text1')}</p>
        </div>
        <div className="checkbox col-lg-4 col-md-6 col-sm-6 col-12">
          <Paragraph>
            {t('additional-info-text2')}
            <sup>*</sup>
          </Paragraph>
          <CheckboxWrapper>
            <MemoizedCheckbox
              Controller={Controller}
              control={control}
              name="yes"
              label={t('yes')}
            />
            {/* <MemoizedCheckbox
              Controller={Controller}
              control={control}
              name="no"
              label="Нет"
            /> */}
          </CheckboxWrapper>
        </div>
        <ButtonWrapper>
          <CancelBtnComponent
            name={t('back')}
            className="prev-btn"
            onClick={() => history.push('/references')}
            type="button"
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name={t('submit')}
            className="next-btn"
            disabled={watch('yes') ? false : true}
            type="submit"
            // onClick={() => {
            //   setModal(true);
            // }}
          />
        </ButtonWrapper>
      </AdditionalInfoProvider>

      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
          return true;
        }}
      />
    </>
  );
}
