import { NextBtnComponent } from 'components/buttons/next-btn'
import { CancelBtnComponent } from 'components/buttons/prev-btn'
import { ButtonsProvider } from 'components/buttons/style'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Title } from 'styles/globalStyle'
import { Qualification } from './qualification'
import { LanguageProvider, LanguageForm } from "./style"
import { Test } from './test'
import { UploadDocuments } from './uploadDocument'

export function EnglishLanguage() {
   const history = useHistory()
   return (
      <LanguageProvider>
         <Title>Английский язык</Title>
         <LanguageForm>
            <Qualification />
            <Test />
            <UploadDocuments />
            <ButtonsProvider>
               <CancelBtnComponent
                  name='Назад'
                  className='prev-btn'
                  onClick={() => history.push("/address-info")}
                  type='button' />
               <NextBtnComponent
                  name='Продолжить'
                  className='next-btn'
                  onClick={() => history.push("/english-language")}
                  type='submit' />
            </ButtonsProvider>
         </LanguageForm>
      </LanguageProvider>
   )
}
