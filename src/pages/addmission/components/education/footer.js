import DragDrop from 'components/dragDrop';
import { FileUpload } from 'components/fileUpload';
import { Attachments, useAttachments } from 'hooks/useAttachment';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Paragraph, Title } from 'styles/globalStyle';

export function EducationFooter({
  transcript,
  setTranscript,
  upload,
  setUpload,
  attechments,
}) {
  const {
    control,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  const [qualInfo, setQualInfo] = useState(true);
  const [qualDiplom, setQualDiplom] = useState(true);

  return (
    <div className="row mt-5">
      <Title>{t('qualification-footer-title')}</Title>
      <div className="col-lg-6 col-xl-8 col-sm-6 col-12 mt-2">
        <Paragraph>{t('qualification-footer-p1')}</Paragraph>
        {Attachments(attechments, 'qualification info') !== false &&
        qualInfo ? (
          <FileUpload
            path={Attachments(attechments, 'qualification info')?.path}
            ext={Attachments(attechments, 'qualification info')?.ext}
            setState={setQualInfo}
          />
        ) : (
          <DragDrop
            name="transcript"
            inputId="transcript"
            files={transcript}
            setFile={setTranscript}
            required
            className="p-0"
          />
        )}
      </div>
      {/* <div className="col-lg-6 col-sm-6 col-12">
        <Paragraph>{t('qualification-footer-p2')}</Paragraph>
        {Attachments(attechments, 'qualification diploma') !== false &&
        qualDiplom ? (
          <FileUpload
            path={Attachments(attechments, 'qualification diploma')?.path}
            ext={Attachments(attechments, 'qualification diploma')?.ext}
            setState={setQualDiplom}
          />
        ) : (
          <DragDrop
            name="transcript"
            inputId="transcript"
            files={upload}
            setFile={setUpload}
            required
            className="p-0"
          />
        )}
      </div> */}
    </div>
  );
}
