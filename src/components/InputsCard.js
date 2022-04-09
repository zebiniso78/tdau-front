import React from 'react';
import styled from 'styled-components';
import UserFormSelectComponent from './select';
import { InputComponent } from './input/controllerInput';
import { ButtonsProvider } from './buttons/style';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { NextBtnComponent } from './buttons/next-btn';
import { CancelBtnComponent } from './buttons/prev-btn';

const InputsCard = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  // const data = [
  //   {
  //     type: 'select',
  //     title: 'Кто ты',
  //     value: 'mister',
  //     option: 'Mister',
  //   },
  //   {
  //     type: 'text',
  //     title: 'Имя',
  //   },
  //   {
  //     type: 'text',
  //     title: 'Фамилия',
  //   },
  //   {
  //     type: 'text',
  //     title: 'Отчества',
  //   },

  //   {
  //     type: 'date',
  //     title: 'Дата рождения',
  //   },
  //   {
  //     type: 'select',
  //     title: 'Пол',
  //   },
  //   {
  //     type: 'select',
  //     title: 'Национальность',
  //   },
  //   {
  //     type: 'select',
  //     title: 'Страна рождения',
  //   },
  //   {
  //     type: 'select',
  //     title: 'Текущее место жительства',
  //   },
  //   {
  //     type: 'select',
  //     title: 'Страна постоянного проживания',
  //   },
  // ];
  return (
    <>
      <Card>
        <div className="inputs-card__heading">
          <h2>{props.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              required={true}
              title="Кто ты*"
              name="depar_id"
              placeholder="Мистер"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="name"
              plProps="Введите Имя"
              label="Имя*"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="surname"
              plProps="Введите Фамилия"
              label="Фамилия*"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <InputComponent
              Controller={Controller}
              control={control}
              nameProps="surname"
              plProps="Введите oтчества"
              label="Отчества*"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title="Дата рождения*"
              name="depar_id"
              required={true}
              placeholder="Мистер"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title="Пол*"
              name="depar_id"
              required={true}
              placeholder="Мистер"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title="Страна рождения*"
              name="depar_id"
              placeholder="Выберите"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title="Национальность*"
              name="depar_id"
              placeholder="Мистер"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title="Страна постоянного проживания*"
              name="depar_id"
              placeholder="Выберите"
              // options={departList}
              disabled={false}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-2">
            <UserFormSelectComponent
              Controller={Controller}
              control={control}
              title="Текущее место жительства*"
              name="depar_id"
              placeholder="Выберите"
              // options={departList}
              disabled={false}
            />
          </div>
        </div>
        <ButtonsProvider>
          <NextBtnComponent name="Сохранить" className="next-btn" />
        </ButtonsProvider>
      </Card>
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  padding-bottom: 120px;
  border-radius: 12px;
  .inputs-card__heading {
    margin-bottom: 16px;
    h2 {
      margin: 0;
      padding: 0;
      text-align: left;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #010e31;
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding: 24px 0;

    li {
      width: 24%;
    }
  }

  button {
    margin: 0 !important;
  }
`;

export default InputsCard;
