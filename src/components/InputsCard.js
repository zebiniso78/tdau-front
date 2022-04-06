import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const InputsCard = (props) => {
  const data = [
    {
      type: 'select',
      title: 'Кто ты',
      value: 'mister',
      option: 'Mister',
    },
    {
      type: 'text',
      title: 'Имя',
    },
    {
      type: 'text',
      title: 'Фамилия',
    },
    {
      type: 'text',
      title: 'Отчества',
    },

    {
      type: 'date',
      title: 'Дата рождения',
    },
    {
      type: 'select',
      title: 'Пол',
    },
    {
      type: 'select',
      title: 'Национальность',
    },
    {
      type: 'select',
      title: 'Страна рождения',
    },
    {
      type: 'select',
      title: 'Текущее место жительства',
    },
    {
      type: 'select',
      title: 'Страна постоянного проживания',
    },
  ];
  return (
    <>
      <Card>
        <div className="inputs-card__heading">
          <h2>{props.title}</h2>
        </div>
        <ul>
          {data.map((e) => (
            <li>
              <Input
                type={e.type}
                required
                title={e.title}
                value={e.value}
                option={e.option}
              />
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  .inputs-card__heading {
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
`;

export default InputsCard;
