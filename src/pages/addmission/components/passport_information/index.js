import React, { useEffect, useMemo } from 'react';
import { InputComponent } from '../../../../components/input/controllerInput';
import { PassportInfoProvider, Title, Row, Col } from './style';
import { Controller, useForm } from 'react-hook-form';
import Calendar from '../../../../components/calendar';
import DragDrop from '../../../../components/dragDrop';
import { useState } from 'react';
import { ButtonsProvider } from '../../../../components/buttons/style';
import { CancelBtnComponent } from '../../../../components/buttons/prev-btn';
import { NextBtnComponent } from '../../../../components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { CustomMask } from 'components/mask/customMask';
import { admissionApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';
import moment from 'moment';
import { Error } from 'styles/globalStyle';
import { fetchData } from 'hooks/useFetch';
import { LoaderComponent } from 'components/loader';
import { Attachments } from 'hooks/useAttachment';
import { FileUpload } from 'components/fileUpload';
import AntdCalendar from 'components/calendar/calendar';
import { useTranslation } from 'react-i18next';

export default function PassportInformation() {
  const history = useHistory();
  const { t } = useTranslation();
  let dateFormat = 'YYYY-MM-DD';
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let steps = localStorage.getItem('step');
  const [transcript, setTranscript] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] = useState(undefined);
  const [isFetch, setIsFetch] = useState(true);
  const [attachPassword, setAttachPassword] = useState(true);

  const [fileno, setFileno] = useState(false);
  useEffect(() => {
    if (steps) {
      setIsFetch(true);
      fetchData(
        admissionApi.admissionGetForign(null),
        setDefaultValues,
        setIsFetch
      );
      setIsFetch(false);
    }
  }, [steps]);
  useMemo(() => {
    if (defaultValues?.passport_number == null) {
      console.log('null');
    } else {
      reset({
        name: defaultValues?.passport_number,
        enteredYear: moment(defaultValues?.passport_expiry).toDate(),
      });
    }
    setIsFetch(false);
  }, [isFetch, defaultValues]);
  const onSubmit = async (data) => {
    localStorage.setItem('step', 3);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('register_step', 3);
      formData.append('passport', transcript[0]);
      // formData.append('passport_number', data?.name);
      formData.append(
        'passport_expiry',
        moment(data?.enteredYear).format(dateFormat)
      );
      if (transcript?.length > 0) {
        setFileno(false);
        await admissionApi.admissionPostForign(formData);
        toast.success('Паспортные данные успешно созданы');
        history.push('/university-admissions/address-info');
      } else {
        setFileno(true);
        toast.error('Выберите файл');
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      toast.error(e?.msg);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage?.getItem('step') < 2) {
      history.push('/university-admissions/personal-info');
    }
  }, []);

  return (
    <PassportInfoProvider onSubmit={handleSubmit(onSubmit)}>
      <Title>{t('passport-info')}</Title>
      {!isFetch ? (
        <>
          {/* <Row className="row align-items-start">
            <Col
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              style={{ marginTop: '5px' }}
            >
              <CustomMask
                Controller={Controller}
                control={control}
                nameProps="name"
                mask="AA1111111"
                title={t('passport-number')}
                required={true}
                placeholder={t('passport-number')}
                className={
                  errors && errors?.hasOwnProperty('name') && 'input-error'
                }
              />
              {errors && errors?.hasOwnProperty('name') && (
                <Error> {t('error-field')}</Error>
              )}
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Calendar
                Controller={Controller}
                control={control}
                label={t('passport-expiry') + ' *'}
                nameProps="enteredYear"
                plProps="дд/мм/гггг"
                format="DD.MM.YYYY"
                className={
                  errors && errors?.hasOwnProperty('enteredYear')
                    ? 'calendar-error'
                    : 'calendar'
                }
                required={true}
              />
              {errors && errors?.hasOwnProperty('enteredYear') && (
                <Error className="select-error-tooltip">
                  {t('error-field')}
                </Error>
              )}
            </Col>
          </Row> */}
          <Row className="row">
            <Col className="col-md-6 col-12   ">
              <p style={{ padding: '0' }}>{t('passport-info-p1')}</p>

              {Attachments(
                defaultValues?.attachments,
                'qualification diploma'
              ) !== false && attachPassword ? (
                <div style={{ maxWidth: '60%' }}>
                  <FileUpload
                    path={
                      Attachments(
                        defaultValues?.attachments,
                        'qualification diploma'
                      )?.path
                    }
                    ext={
                      Attachments(
                        defaultValues?.attachments,
                        'qualification diploma'
                      )?.ext
                    }
                    setState={setAttachPassword}
                  />
                </div>
              ) : (
                <>
                  <DragDrop
                    name="transcript"
                    inputId="transcript"
                    files={transcript}
                    setFile={setTranscript}
                    required
                    className="p-0"
                  />

                  {fileno && !transcript?.length > 0 && (
                    <Error className="select-error-tooltip">
                      {t('error-field')}
                    </Error>
                  )}
                </>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <LoaderComponent />
      )}
      <Col className="col-10" />
      <ButtonsProvider>
        <CancelBtnComponent
          name={t('back')}
          className="prev-btn"
          onClick={() => history.push('/university-admissions/academic-info')}
        />
        {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
        <NextBtnComponent
          name={t('submit')}
          className="next-btn"
          type="submit"
        />
      </ButtonsProvider>
    </PassportInfoProvider>
  );
}
