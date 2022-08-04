import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReferencesProvider } from './style';
import DragDrop from 'components/dragDrop';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { admissionApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';
import { fetchData } from 'hooks/useFetch';
import { Attachments } from 'hooks/useAttachment';
import { FileUpload } from 'components/fileUpload';
import { useTranslation } from 'react-i18next';

export default function References() {
  const history = useHistory();
  const [recomendationDoc, setRecomendationDoc] = useState([]);
  const [recomendationDoc2, setRecomendationDoc2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetch, setIsFetch] = useState(true);
  const [defaultValues, setDefaultValues] = useState(undefined);
  const [attachRecomendationDoc, setAttachRecomendationDoc] = useState(true);
  const [attachRecomendationDoc2, setAttachRecomendationDoc2] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    fetchData(
      admissionApi.admissionGetForign(null),
      setDefaultValues,
      setIsFetch
    );
  }, []);
  console.log(defaultValues, 'defaultValues');
  async function handleSubmit(e) {
    localStorage.setItem('step', 7);
    e.preventDefault();
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('recommendation', recomendationDoc[0]);
      formData.append('recommendation_second', recomendationDoc2[0]);
      formData.append('register_step', 7);
      await admissionApi.admissionPostForign(formData);
      setIsLoading(false);
      toast.success('Рекомендации успешно создан');
      history.push('/university-admissions/check-your-application');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (localStorage?.getItem('step') < 6) {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  return (
    <>
      <ReferencesProvider onSubmit={handleSubmit} className="container">
        <div className="row">
          <h4>{t('reference-title')}</h4>
          <p>{t('reference-text1')}</p>
        </div>
        <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
          <p>{t('reference-text2')}</p>
          {Attachments(defaultValues?.attachments, 'recommendation') !==
            false && attachRecomendationDoc ? (
            <div style={{ maxWidth: '60%' }}>
              <FileUpload
                path={
                  Attachments(defaultValues?.attachments, 'recommendation')
                    ?.path
                }
                ext={
                  Attachments(defaultValues?.attachments, 'recommendation')?.ext
                }
                setState={setAttachRecomendationDoc}
              />
            </div>
          ) : (
            <DragDrop
              name="recomendationDoc"
              inputId="recomendationDoc"
              files={recomendationDoc}
              setFile={setRecomendationDoc}
              required
              className="p-0"
            />
          )}
        </div>
        <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
          <p>{t('reference-text3')}</p>
          {Attachments(defaultValues?.attachments, 'recommendation second') !==
            false && attachRecomendationDoc2 ? (
            <div style={{ maxWidth: '60%' }}>
              <FileUpload
                path={
                  Attachments(
                    defaultValues?.attachments,
                    'recommendation second'
                  )?.path
                }
                ext={
                  Attachments(
                    defaultValues?.attachments,
                    'recommendation second'
                  )?.ext
                }
                setState={setAttachRecomendationDoc2}
              />
            </div>
          ) : (
            <DragDrop
              name="recomendationDoc"
              inputId="recomendationDoc"
              files={recomendationDoc2}
              setFile={setRecomendationDoc2}
              required
              className="p-0"
            />
          )}
        </div>
        <p>{t('reference-text4')}</p>
        <ButtonsProvider>
          <CancelBtnComponent
            name={t('back')}
            className="prev-btn"
            onClick={() =>
              history.push('/university-admissions/supporting-info')
            }
            type="button"
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name={t('submit')}
            className="next-btn"
            disabled={isLoading}
            type="submit"
          />
        </ButtonsProvider>
      </ReferencesProvider>
    </>
  );
}
