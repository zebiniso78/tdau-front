import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextContainer,
  TextContainer1,
  TextContainer2,
} from '../container/style';

function TextContnet({ add_info, work_activities, photo }) {
  const { t } = useTranslation();
  return (
    <TextContainer>
      <TextContainer1 data-aos="fade-up">
        <div className="right-text">
          {add_info?.map((x, i) => (
            <p data-aos="fade-up" key={i}>
              <b>{x?.key}:</b> <span>{x?.value}</span>
            </p>
          ))}
        </div>
        <img
          src={`${process.env.REACT_APP_API_SECOND_ROOT}/${photo}`}
          alt="rector foto"
        />
      </TextContainer1>
      <TextContainer2>
        <h4 data-aos="fade-up">{t('work-activities')}</h4>

        {work_activities?.map((x, i) => (
          <p data-aos="fade-up" key={i}>
            <b>{x?.key} - </b> {x?.value}
          </p>
        ))}
      </TextContainer2>
    </TextContainer>
  );
}

export default TextContnet;
