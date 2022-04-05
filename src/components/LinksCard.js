import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinksCard = (props) => {
  return (
    <>
      <Card to={props.href}>
        <img src={props.image} alt={props.alter} />
        <h3>{props.title}</h3>
      </Card>
    </>
  );
};

const Card = styled.a`
  background-color: #ffffff;
  border-radius: 8px;
  margin: 0;
  padding: 0;
  padding: 10px 12px;
  margin-bottom: 20px;
  text-decoration: none;
  width: 30.5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    h3 {
      color: #169622;
    }
  }

  img {
    width: 20%;
    margin-right: 16px;
  }

  h3 {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    color: #3b3b3a;
  }
`;

export default LinksCard;
