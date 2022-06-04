import React, { useState } from 'react'
import DragDrop from 'components/dragDrop'
import { Paragraph, Title } from 'styles/globalStyle'

export function UploadDocuments() {
   const [upload, setUpload] = useState([])
   return (
      <div className='row mt-4'>
         <Title className='form-title'>Загрузить подтверждающие документы</Title>
         <Paragraph>Пожалуйста, загрузите свой последний сертификат с результатами
            тестов по английскому языку и/или квалификационный сертификат*</Paragraph>
         <div className='col-lg-7 col-sm-6 col-md-6'>
            <DragDrop
               name="transcript"
               inputId="transcript"
               files={upload}
               setFile={setUpload}
               required
               className='p-0'
            />
         </div>
      </div>
   )
}
