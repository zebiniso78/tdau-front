import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

const ServiceCard = (props) => {
  return (
    <>
      <Card>
        <img src={props.image} alt={props.alter} />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href={props.href}>
          {props.link} <AiOutlineRight />
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
  padding: 16px;
`;

export default ServiceCard;
