import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SupportingInformationProvider } from './style';
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

export default function SupportingInformation() {
  const history = useHistory();
  const { t } = useTranslation();
  const [supportingStatement, setSupportingStatement] = useState([]);
  const [resume, setResume] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] = useState(undefined);
  const [isFetch, setIsFetch] = useState(true);
  const [attachEssay, setAttachEssay] = useState(true);
  const [attachResume, setAttachResume] = useState(true);
  useEffect(() => {
    fetchData(
      admissionApi.admissionGetForign(null),
      setDefaultValues,
      setIsFetch
    );
  }, []);
  console.log(defaultValues, 'defaultValues');
  async function handleSubmit(e) {
    localStorage.setItem('step', 6);
    e.preventDefault();
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('essay', supportingStatement[0]);
      formData.append('resume', resume[0]);
      formData.append('register_step', 6);
      await admissionApi.admissionPostForign(formData);
      setIsLoading(false);
      toast.success(t('success-text'));
      history.push('/university-admissions/references');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (localStorage?.getItem('step') < 5) {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  return (
    <>
      <SupportingInformationProvider
        onSubmit={handleSubmit}
        className="container"
      >
        <h4>{t('support-title')}</h4>
        <div className="row mb-5">
          <div className="title-wrapper">
            <h5>{t('support-title-text1')}</h5>
            <hr />
          </div>

          <p>{t('support-title-text2')}</p>
          <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
            {Attachments(defaultValues?.attachments, 'essay') !== false &&
            attachEssay ? (
              <div style={{ maxWidth: '60%' }}>
                <FileUpload
                  path={Attachments(defaultValues?.attachments, 'essay')?.path}
                  ext={Attachments(defaultValues?.attachments, 'essay')?.ext}
                  setState={setAttachEssay}
                />
              </div>
            ) : (
              <DragDrop
                name="recomendationDoc"
                inputId="recomendationDoc"
                files={supportingStatement}
                setFile={setSupportingStatement}
                required
                className="p-0"
              />
            )}
          </div>
        </div>
        <div className="row mb-5">
          <div className="title-wrapper">
            <h5 className="resume-title">{t('support-title-2')}</h5>
            <hr className="resume-hr" />
          </div>
          <p>{t('support-title-text3')}</p>
          <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
            {Attachments(defaultValues?.attachments, 'resume') !== false &&
            attachResume ? (
              <div style={{ maxWidth: '60%' }}>
                <FileUpload
                  path={Attachments(defaultValues?.attachments, 'resume')?.path}
                  ext={Attachments(defaultValues?.attachments, 'resume')?.ext}
                  setState={setAttachResume}
                />
              </div>
            ) : (
              <DragDrop
                name="recomendationDoc"
                inputId="recomendationDoc"
                files={resume}
                setFile={setResume}
                required
                className="p-0"
              />
            )}
          </div>
        </div>

        <ButtonsProvider>
          <CancelBtnComponent
            name={t('back')}
            className="prev-btn"
            type="button"
            onClick={() => history.push('/english-language')}
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name={t('submit')}
            className="next-btn"
            disabled={isLoading}
            // onClick={() => history.push('/references')}
            type="submit"
          />
        </ButtonsProvider>
      </SupportingInformationProvider>
    </>
  );
}
