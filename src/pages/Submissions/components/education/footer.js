import DragDrop from 'components/dragDrop';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Paragraph, Title } from 'styles/globalStyle';

export function EducationFooter() {
  const {
    control,
    formState: { errors },
  } = useForm();
  const [transcript, setTranscript] = useState([]);
  const [upload, setUpload] = useState([]);

  return (
    <div className="row mt-5">
      <Title>Загрузить подтверждающие документы</Title>
      <div className="col-lg-6 col-sm-6 col-12">
        <Paragraph>
          Пожалуйста, загрузите копию своей академической справки, чтобы
          подтвердить квалификацию, указанную выше. Обратите внимание, что здесь
          вы можете загрузить только ОДИН файл*
        </Paragraph>
        <DragDrop
          name="transcript"
          inputId="transcript"
          files={transcript}
          setFile={setTranscript}
          required
          className="p-0"
        />
      </div>
      <div className="col-lg-6 col-sm-6 col-12">
        <Paragraph>
          Если вы уже закончили обучение, пожалуйста, загрузите копию своего
          диплома об образовании. Обратите внимание, что здесь вы можете
          загрузить только ОДИН файл
        </Paragraph>
        <DragDrop
          name="transcript"
          inputId="transcript"
          files={upload}
          setFile={setUpload}
          required
          className="p-0"
        />
      </div>
    </div>
  );
}
