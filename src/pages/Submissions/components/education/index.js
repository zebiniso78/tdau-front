import React from 'react';
import { Title } from 'styles/globalStyle';
import { EducationProvider, EducationForm } from './style';
import { useForm, Controller } from 'react-hook-form';
import { InputComponent } from 'components/input/controllerInput';
import UserFormSelectComponent from 'components/select';
import { EducationBody } from './body';
import { EducationFooter } from './footer';
import { ButtonsProvider } from 'components/buttons/style';
import { CancelBtnComponent } from 'components/buttons/prev-btn';
import { NextBtnComponent } from 'components/buttons/next-btn';
import { useHistory } from 'react-router-dom';

export function Education() {
  const history = useHistory();
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <EducationProvider>
      <Title>Образование и квалификации</Title>
      <EducationForm>
        <Title className="form-title">Предыдущая школа или колледж</Title>
        <div className="row align-items-end mt-2">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="school"
              plProps="Школа/колледж"
              label="Школа/колледж*"
              className="mb-0"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Получена квалификация*"
              name="depar_id"
              placeholder="Район"
              // options={departList}
              disabled={false}
            />
          </div>
          {/* <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="school"
              plProps="Школа/колледж"
              label='Если вы выбрали «Другая квалификация» из списка выше, укажите здесь тип квалификации'
              className='mb-0'
            />
          </div> */}
          {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-3">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Основная тема*"
              name="qualifications"
              placeholder="Другая квалификация"
              // options={departList}
              disabled={false}
            />
          </div> */}
        </div>
        <EducationBody />
        <EducationFooter />
        <ButtonsProvider>
          <CancelBtnComponent
            name="Назад"
            className="prev-btn"
            onClick={() => history.push('/address-info')}
            type="button"
          />
          <CancelBtnComponent name="Сахранит" className="save-btn" />
          <NextBtnComponent
            name="Продолжить"
            className="next-btn"
            onClick={() => history.push('/supporting-info')}
            type="submit"
          />
        </ButtonsProvider>
      </EducationForm>
    </EducationProvider>
  );
}
