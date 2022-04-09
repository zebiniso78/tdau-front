import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsCalendarWeek } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';

const NewsCard = (props) => {
  return (
    <>
      <MyCard className={props.className}>
        <img src={props.image} alt={props.alter} />
        <p className="card-date">
          <BsCalendarWeek /> <span>{props.date}</span>
          <AiFillEye /> <span>{props.seen}</span>
        </p>
        <Texts>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <p className="hashtags">
            <span>#{props.hash}</span> <span> #{props.hash2}</span>
          </p>
        </Texts>
      </MyCard>
    </>
  );
};

const MyCard = styled.div`
  box-sizing: border-box;
  width: 100%;

  img {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 12px;
  }

  .card-date {
    display: flex;
    align-items: center;
    color: #858892;
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-bottom: 12px;

    span {
      margin-right: 12px;
    }

    svg {
      width: 14px;
      height: 16px;
      margin-right: 4px;
    }
  }
`;

const Texts = styled.div`
  text-align: left;
  margin: 0;
  padding: 0;

  h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #3b3b3a;
    transition: 0.7s;
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #777674;
  }

  .hashtags {
    margin-bottom: 0;
    span {
      margin-right: 8px;
    }
  }

  ${MyCard}:hover & {
    h3 {
      color: #169622;
    }
  }

  @media (max-width: 1440px) {
    h3 {
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 12px;
      line-height: 16px;
    }

    p {
      margin-bottom: 8px;
    }
  }
`;

export default NewsCard;
