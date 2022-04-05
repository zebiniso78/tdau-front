import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const newsCard = (props) => {
  return (
    <>
      <MyCard>
        <img src={props.image} alt={props.alter} />
        <Texts>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <Link to={props.linkText}>More...</Link>
        </Texts>
      </MyCard>
    </>
  );
};

const MyCard = styled.div`
  border: 1px solid green;
`;

const Texts = styled.div``;

export default newsCard;
