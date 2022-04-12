import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MemoizedCheckbox, CheckboxComponent } from 'components/checkbox';
import {
  AdditionalInfoProvider,
  CheckboxWrapper,
  Paragraph,
  ButtonWrapper,
} from './style';
import { Controller, useForm } from 'react-hook-form';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import Modal from '../../../../components/modal';

export function AdditionalInformation() {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const {
    control,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch('yes'));
  console.log(watch('no'));

  return (
    <>
      <AdditionalInfoProvider className="container">
        <div className="row">
          <h4>Условия использывание</h4>
          <p>
            Соответственно, Apply себя не несет прямой или косвенной
            ответственности за любой ущерб или убытки, вызванные или
            предположительно вызванные или связанные с использованием или
            доверием к любому пользователю или другому контенту, товарам, курсам
            или услугам, доступным на или через любой другой сайт. Apply
            Yourself предоставляет услуги онлайн-приложения для образовательных
            и других учреждений. Использование вами этой услуги или любых других
            услуг «Применить себя» регулируется положениями и условиями,
            содержащимися в настоящем документе. Получая доступ к этому
            онлайн-приложению или используя его, вы соглашаетесь соблюдать эти
            условия. Apply Yourself может пересмотреть эти условия в любое
            время, и любые изменения будут иметь обязательную силу для вас и
            вашего будущего доступа к онлайн-приложению. Поэтому вам следует
            посещать эту публикацию, чтобы время от времени просматривать
            условия, когда вы получаете доступ к онлайн-приложению или
            используете его. Если вы считаете, что ваш PIN-код и/или пароль были
            скомпрометированы или к вашей учетной записи был осуществлен
            несанкционированный доступ, вы обязаны уведомить об этом как можно
            скорее по адресу (ссылка для службы поддержки)
          </p>
        </div>
        <div className="checkbox col-lg-4 col-md-6 col-sm-6 col-12">
          <Paragraph>
            Я подтверждаю, что прочитал и принимаю Условия использования TDAU{' '}
            <sup>*</sup>
          </Paragraph>
          <CheckboxWrapper>
            <MemoizedCheckbox
              Controller={Controller}
              control={control}
              name="yes"
              label="Да"
            />
            <MemoizedCheckbox
              Controller={Controller}
              control={control}
              name="no"
              label="Нет"
            />
          </CheckboxWrapper>
        </div>
        <ButtonWrapper>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            onClick={() => history.push('/references')}
            type="button"
          />
          <CancelBtnComponent name="Сахранит" className="save-btn" />
          <NextBtnComponent
            name="Отправлять"
            className="next-btn"
            onClick={() => {
              setModal(true);
            }}
          />
        </ButtonWrapper>
      </AdditionalInfoProvider>

      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
          return true;
        }}
      />
    </>
  );
}
