import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReferencesProvider } from './style';
import DragDrop from 'components/dragDrop';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';

export function References() {
  const history = useHistory();
  const [recomendationDoc, setRecomendationDoc] = useState([]);
  return (
    <>
      <ReferencesProvider className="container">
        <div className="row">
          <h4>Использованная литература</h4>
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
            files={recomendationDoc}
            setFile={setRecomendationDoc}
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
            onClick={() => history.push('/address-info')}
            type="button"
          />
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            onClick={() => history.push('/additional-info')}
            type="submit"
          />
        </ButtonsProvider>
      </ReferencesProvider>
    </>
  );
}
