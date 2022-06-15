import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SupportingInformationProvider } from './style';
import DragDrop from 'components/dragDrop';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { admissionApi } from 'services/api/pagesApi';
import toast from "react-hot-toast"
import { fetchData } from 'hooks/useFetch';
import { Attachments } from 'hooks/useAttachment';
import { FileUpload } from 'components/fileUpload';

export default function SupportingInformation() {
  const history = useHistory();
  const [supportingStatement, setSupportingStatement] = useState([]);
  const [resume, setResume] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [defaultValues, setDefaultValues] = useState(undefined);
  const [isFetch, setIsFetch] = useState(true)
  const [attachEssay, setAttachEssay] = useState(true)
  const [attachResume, setAttachResume] = useState(true)
  useEffect(() => {
    fetchData(admissionApi.admissionGetForign(null), setDefaultValues, setIsFetch)
  }, [])
  console.log(defaultValues, 'defaultValues')
  async function handleSubmit(e) {
    localStorage.setItem('step', 6);
    e.preventDefault()
    try {
      setIsLoading(true)
      let formData = new FormData()
      formData.append('essay', supportingStatement[0])
      formData.append('resume', resume[0])
      formData.append('register_step', 6)
      await admissionApi.admissionPostForign(formData);
      setIsLoading(false)
      toast.success('Вспомогательная информация успешно создана')
      history.push('/university-admissions/references')
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (localStorage?.getItem('step') < 5) {
      history.push('/university-admissions/personal-info');
    }
  }, []);
  return (
    <>
      <SupportingInformationProvider onSubmit={handleSubmit} className="container">
        <h4>Вспомогательная информация</h4>
        <div className="row mb-5">
          <div className="title-wrapper">
            <h5>Поддерживающее заявление</h5>
            <hr />
          </div>

          <p>
            Пожалуйста, загрузите копию вашего личного заявления. Личное
            заявление должно включать: ваш интерес и опыт в этой предметной
            области; причины, по которым вы выбрали именно эту программу; ваша
            будущая цель или карьерный план; как программа обучения позволяет
            вам достичь этого и как программа связана с вашими планами на
            будущее
          </p>
          <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
            {
              (Attachments(defaultValues?.attachments, 'essay') !== false && attachEssay) ? (
                <div style={{ maxWidth: '60%' }}>
                  <FileUpload
                    path={Attachments(defaultValues?.attachments, 'essay')?.path}
                    ext={Attachments(defaultValues?.attachments, 'essay')?.ext}
                    setState={setAttachEssay} />
                </div>
              ) :
                <DragDrop
                  name="recomendationDoc"
                  inputId="recomendationDoc"
                  files={supportingStatement}
                  setFile={setSupportingStatement}
                  required
                  className="p-0"
                />
            }
          </div>
        </div>
        <div className="row mb-5">
          <div className="title-wrapper">
            <h5 className="resume-title">Биография \ Резюме</h5>
            <hr className="resume-hr" />
          </div>
          <p>
            Пожалуйста, загрузите копию своего резюме в поддержку вашего
            заявления. Обратите внимание, что соискателям программы MBA резюме
            необходимо для рассмотрения заявки
          </p>
          <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
            {
              (Attachments(defaultValues?.attachments, 'resume') !== false && attachResume) ? (
                <div style={{ maxWidth: '60%' }}>
                  <FileUpload
                    path={Attachments(defaultValues?.attachments, 'resume')?.path}
                    ext={Attachments(defaultValues?.attachments, 'resume')?.ext}
                    setState={setAttachResume} />
                </div>
              ) :
                <DragDrop
                  name="recomendationDoc"
                  inputId="recomendationDoc"
                  files={resume}
                  setFile={setResume}
                  required
                  className="p-0"
                />
            }
          </div>
        </div>

        {/* <div className="row mb-5">
          <div className="title-wrapper">
            <h5>Форма клинического визита</h5>
            <hr />
          </div>

          <p>
            Претенденты на получение диплома PG по лучевой терапии должны
            загрузить копию заполненной формы клинического визита, которую можно
            загрузить с нашего веб-сайта.
          </p>
          <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
            <DragDrop
              name="recomendationDoc"
              inputId="recomendationDoc"
              files={medicalSertificate}
              setFile={setMedicalSertificate}
              required
              className="p-0"
            />
          </div>
        </div> */}

        <ButtonsProvider>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            type="button"
            onClick={() => history.push('/english-language')}
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name="Продолжить"
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
