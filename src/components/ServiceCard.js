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

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #45ab4e;

    svg {
      margin-left: 10px;
    }
  }
`;

export default ServiceCard;
