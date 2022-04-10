import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SupportingInformationProvider } from './style';
import DragDrop from 'components/dragDrop';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';

export function SupportingInformation() {
  const history = useHistory();
  const [supportingStatement, setSupportingStatement] = useState([]);
  const [researchProposal, setResearchProposal] = useState([]);
  const [resume, setResume] = useState([]);
  const [medicalSertificate, setMedicalSertificate] = useState([]);
  return (
    <>
      <SupportingInformationProvider className="container">
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
            <DragDrop
              name="recomendationDoc"
              inputId="recomendationDoc"
              files={supportingStatement}
              setFile={setSupportingStatement}
              required
              className="p-0"
            />
          </div>
        </div>

        <div className="row mb-5">
          <div className="title-wrapper">
            <h5>Предложение исследования</h5>
            <hr />
          </div>

          <p>
            Если вы хотите получить исследовательскую степень (PhD, MPhil, MRes
            и т. д.), пожалуйста, загрузите свое исследовательское предложение.
            Предложение по исследованию должно включать краткое описание
            предметной области, в которой вы хотели бы провести исследование,
            или подробное описание конкретного проекта, а также должно включать
            имя (имена) предполагаемого научного руководителя (ов). Если вы
            подаете заявку на объявленное обучение, вы также должны указать это
          </p>
          <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
            <DragDrop
              name="recomendationDoc"
              inputId="recomendationDoc"
              files={researchProposal}
              setFile={setResearchProposal}
              required
              className="p-0"
            />
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
            <DragDrop
              name="recomendationDoc"
              inputId="recomendationDoc"
              files={resume}
              setFile={setResume}
              required
              className="p-0"
            />
          </div>
        </div>

        <div className="row mb-5">
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
        </div>

        <ButtonsProvider>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            type="button"
            onClick={() => history.push("/english-language")} />
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            onClick={() => history.push('/references')}
            type="submit"
          />
        </ButtonsProvider>
      </SupportingInformationProvider>
    </>
  );
}
