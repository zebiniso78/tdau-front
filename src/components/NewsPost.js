import React from 'react';
import styled from 'styled-components';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';

const NewsPost = (props) => {
  return (
    <>
      <Texts className={props.className}>
        <p className="card-date">
          <BsCalendarWeek /> <span>{props.date}</span>
          <AiFillEye /> <span>{props.seen}</span>
        </p>
        <h3>{props.title}</h3>
      </Texts>
    </>
  );
};

const Texts = styled.div`
  border-top: 1px solid #cccfd6;
  border-bottom: 1px solid #cccfd6;
  margin: 0;
  padding: 0;
  padding: 12px 0;
  box-sizing: border-box;
  text-align: left;

  :hover {
    h3 {
      color: #169622;
    }
  }

  .card-date {
    display: flex;
    align-items: center;
    color: #858892;
    font-size: 13px;
    margin: 0;
    padding: 0;
    margin-bottom: 12px;

    span {
      margin-right: 12px;
    }
  }

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #3b3b3a;
    transition: 0.7s;
  }
`;

export default NewsPost;
