import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

const ServiceCard = (props) => {
  return (
    <>
      <Card className="service-card">
        <img src={props.image} alt={props.alter} />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href={props.link}>
          Применять
          <AiOutlineRight />
        </a>
      </Card>
    </>
  );
};

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  padding: 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #45ab4e;

    svg {
      margin: 0;
      padding: 0;
      margin-left: 10px;
    }
  }

  @media (max-width: 1440px) {
    padding: 22px;
    a {
      font-size: 17px;
    }
  }

  @media (max-width: 1440px) {
    padding: 20px;
    a {
      align-items: center;
      font-size: 14px;
    }
  }
`;

export default ServiceCard;
