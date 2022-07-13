import {
  TextContainer,
  TextContainer2,
} from 'pages/test-pages/rector-massage/container/style';
import React from 'react';
import { useTranslation } from 'react-i18next';

function TextContnet({ data }) {
  const { t } = useTranslation();
  return (
    <TextContainer>
      <TextContainer2>
        <h4 data-aos="fade-right">{t('additional-info')}</h4>
        {data?.map((x, i) => (
          <p data-aos="fade-up" key={i}>
            <b>{x?.key}</b> {x?.value}
          </p>
        ))}
      </TextContainer2>
    </TextContainer>
  );
}

export default TextContnet;
