import { NextBtnComponent } from 'components/buttons/next-btn';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { ButtonsProvider } from 'components/buttons/style';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Title } from 'styles/globalStyle';
import { Qualification } from './qualification';
import { LanguageProvider, LanguageForm } from './style';
import { Test } from './test';
import { UploadDocuments } from './uploadDocument';

export function EnglishLanguage() {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <LanguageProvider>
      <Title>{t('english-test')}</Title>
      <LanguageForm>
        <Qualification />
        <Test />
        <UploadDocuments />
        <ButtonsProvider>
          <CancelBtnComponent
            name={t('back')}
            className="prev-btn"
            onClick={() => history.push('/education-qualifications')}
            type="button"
          />
          <NextBtnComponent
            name={t('submit')}
            className="next-btn"
            onClick={() => history.push('/supporting-info')}
            type="submit"
          />
        </ButtonsProvider>
      </LanguageForm>
    </LanguageProvider>
  );
}
