import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReferencesProvider } from './style';
import DragDrop from 'components/dragDrop';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { admissionApi } from 'services/api/pagesApi';
import toast from 'react-hot-toast';

export default function References() {
  const history = useHistory();
  const [recomendationDoc, setRecomendationDoc] = useState([]);
  const [recomendationDoc2, setRecomendationDoc2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e) {
    localStorage.setItem('step', 7);
    e.preventDefault();
    try {
      setIsLoading(true);
      let formData = new FormData();
      formData.append('recommendation', recomendationDoc[0]);
      formData.append('recommendation_second', recomendationDoc2[0]);
      formData.append('register_step', 7);
      await admissionApi.admissionPost(formData);
      setIsLoading(false);
      toast.success('Рекомендации успешно создан');
      history.push('/additional-info');
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (localStorage?.getItem('step') < 6) {
      history.push('/personal-info');
    }
  }, []);
  return (
    <>
      <ReferencesProvider onSubmit={handleSubmit} className="container">
        <div className="row">
          <h4>Рекомендация</h4>
          <p>
            В рамках критериев приема нам требуются две рекомендации. Это должны
            быть академические рекомендации, если вы получали очное образование
            в любой момент в течение последних трех лет. Ссылки должны быть
            подписаны и иметь соответствующий буквенный заголовок.
          </p>
        </div>
        <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
          <p>
            Пожалуйста, загрузите копию второй рекомендации для этого заявителя.
          </p>
          <DragDrop
            name="recomendationDoc"
            inputId="recomendationDoc"
            files={recomendationDoc}
            setFile={setRecomendationDoc}
            required
            className="p-0"
          />
        </div>
        <div className="drag-drop__wrapper col-lg-8 col-sm-8 col-12">
          <p>
            Пожалуйста, загрузите копию второй рекомендации для этого заявителя.
          </p>
          <DragDrop
            name="recomendationDoc"
            inputId="recomendationDoc"
            files={recomendationDoc2}
            setFile={setRecomendationDoc2}
            required
            className="p-0"
          />
        </div>
        <p>
          Если у вас нет ссылок для включения в заявку, ваша заявка может быть
          подана без них, но вас могут попросить предоставить рекомендации, если
          будет сделано предложение. Если требуются ссылки, это будет включено в
          качестве условия предложения.
        </p>
        <ButtonsProvider>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            onClick={() => history.push('/supporting-info')}
            type="button"
          />
          {/* <CancelBtnComponent name="Сахранит" className="save-btn" /> */}
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            disabled={isLoading}
            type="submit"
          />
        </ButtonsProvider>
      </ReferencesProvider>
    </>
  );
}
