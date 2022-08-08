import React, { useMemo, useState } from 'react';
import { Title } from 'styles/globalStyle';
import { EducationProvider, EducationForm } from './style';
import { useForm, Controller } from 'react-hook-form';
import { InputComponent } from 'components/input/controllerInput';
import UserFormSelectComponent from 'components/select';
import { EducationFooter } from './footer';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { useHistory } from 'react-router-dom';
import { useGetList } from '../hooks/useGetList';
import { useEffect } from 'react';
import { admissionApi } from 'services/api/pagesApi';
import moment from 'moment';
import Calendar from 'components/calendar';
import { Error } from 'styles/globalStyle';
import toast from 'react-hot-toast';
import { fetchData } from 'hooks/useFetch';
import { LoaderComponent } from 'components/loader';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();
  const history = useHistory();
  const [qualifications, setQualifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState([]);
  const [upload, setUpload] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [defaultValues, setDefaultValues] = useState(undefined);

  const { getQualification } = useGetList({ setQualifications });
  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    getQualification();
    fetchData(
      admissionApi.admissionGetForign(null),
      setDefaultValues,
      setIsFetch
    );
  }, []);
  useMemo(() => {
    if (
      defaultValues?.qualification === null &&
      defaultValues?.school === null &&
      defaultValues?.qualification_start === 'None' &&
      defaultValues?.qualification_end === 'None'
    ) {
      console.log('null');
    } else {
      reset({
        school: defaultValues?.school,
        qualification: defaultValues?.qualification,
        // qualification: {
        //   label: qualifications.find(item => item?.label === defaultValues?.qualification)?.label,
        //   value: qualifications.find(item => item?.label === defaultValues?.qualification)?.value,
        // },
        qualification_start: moment(
          defaultValues?.qualification_start
        )?.toDate(),
        qualification_end: moment(defaultValues?.qualification_end)?.toDate(),
      });
    }
  }, [isFetch, qualifications]);
  const onSubmit = async (data) => {
    localStorage.setItem('step', 5);
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('school', data?.school);
      formData.append('qualification', data?.qualification);
      formData.append(
        'qualification_start',
        moment(data?.qualification_start).format('YYYY-MM-DD')
      );
      formData.append(
        'qualification_end',
        moment(data?.qualification_end).format('YYYY-MM-DD')
      );
      formData.append('qualification_info', transcript[0]);
      formData.append('qualification_diploma', upload[0]);
      formData.append('register_step', 5);

      if (transcript?.length > 0) {
        await admissionApi.admissionPostForign(formData);
        toast.success('Образовательные квалификации успешно созданы');
        // history.push('/university-admissions/supporting-info');
        history.push('/university-admissions/check-your-application');
      } else {
        toast.error('Вы не загрузили документы');
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage?.getItem('step') < 4) {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  return (
    <EducationProvider>
      <Title>{t('education-title')}</Title>
      {!isFetch ? (
        <EducationForm onSubmit={handleSubmit(onSubmit)}>
          <Title className="form-title">{t('education-school-title')}</Title>
          <div className="row align-items-end mt-2">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <InputComponent
                Controller={Controller}
                control={control}
                nameProps="school"
                plProps={t(
                  defaultValues?.education_type_name !== 'Master'
                    ? 'school'
                    : 'univer'
                )}
                label={
                  t(
                    defaultValues?.education_type_name !== 'Master'
                      ? 'school'
                      : 'univer'
                  ) + '*'
                }
                // className="mb-0"
                className={
                  errors && errors?.hasOwnProperty('school') && 'input-error'
                }
              />
              {errors && errors?.hasOwnProperty('school') && (
                <Error> {t('error-field')}</Error>
              )}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <InputComponent
                Controller={Controller}
                control={control}
                nameProps="qualification"
                plProps={t('qualification') + '*'}
                label={t('qualification') + '*'}
                // className="mb-0"
                className={
                  errors &&
                  errors?.hasOwnProperty('qualification') &&
                  'input-error'
                }
              />
              {errors && errors?.hasOwnProperty('qualification') && (
                <Error> {t('error-field')}</Error>
              )}
            </div>
          </div>
          {/* <div className="row align-items-end mt-3">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Calendar
                Controller={Controller}
                control={control}
                label={t('qualification-start') + '*'}
                nameProps="qualification_start"
                plProps="дд/мм/гггг"
                format="DD.MM.YYYY"
                required={true}
                className={
                  errors && errors?.hasOwnProperty('qualification_start')
                    ? 'calendar-error'
                    : 'calendar'
                }
              />
              {errors && errors?.hasOwnProperty('qualification_start') && (
                <Error className="select-error-tooltip">
                  {t('error-field')}
                </Error>
              )}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Calendar
                Controller={Controller}
                control={control}
                label={t('qualification-end') + '*'}
                nameProps="qualification_end"
                plProps="дд/мм/гггг"
                format="DD.MM.YYYY"
                required={true}
                className={
                  errors && errors?.hasOwnProperty('qualification_end')
                    ? 'calendar-error'
                    : 'calendar'
                }
              />
              {errors && errors?.hasOwnProperty('qualification_end') && (
                <Error className="select-error-tooltip">
                  {t('error-field')}
                </Error>
              )}
            </div>
          </div> */}
          <EducationFooter
            attechments={defaultValues?.attachments}
            transcript={transcript}
            setTranscript={setTranscript}
            upload={upload}
            setUpload={setUpload}
          />
          <ButtonsProvider>
            <CancelBtnComponent
              name={t('back')}
              className="prev-btn"
              onClick={() =>
                history.push('/university-admissions/address-info')
              }
              type="button"
            />
            {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
            <NextBtnComponent
              name={t('submit')}
              className="next-btn"
              // onClick={() => history.push('/supporting-info')}
              disabled={isLoading}
              type="submit"
            />
          </ButtonsProvider>
        </EducationForm>
      ) : (
        <LoaderComponent type="education" />
      )}
    </EducationProvider>
  );
}
