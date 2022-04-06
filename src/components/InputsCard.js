import React from 'react';
import styled from 'styled-components';

const InputsCard = (props) => {
  const data = [
    {
      title: 'Личная информация',
    },
    {
      title: 'История приложений',
    },
    {
      title: 'Вопросы и ответы',
    },
    {
      title: 'Выход',
    },
  ];
  return (
    <>
      <Card>
        <div className="inputs-card__heading">
          <h2>{props.title}</h2>
        </div>
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
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #010e31;
    }
  }
`;

export default InputsCard;
