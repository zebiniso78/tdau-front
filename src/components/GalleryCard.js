import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';
import CardBg from '../assets/CardBg.png';

const GalleryCard = (props) => {
  return (
    <>
      <Card>
        <div className="gallery-card">
          <h3 className="gallery-card-title">{props.title}</h3>
          <div className="gallery-card-center">
            <BsPlayCircle />
          </div>
          <div className="card-bottom">
            <span>{props.date}</span>
            <div>
              <p>{props.month}</p>
              <p>{props.year}</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

const Card = styled.div`
  .gallery-card {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    margin: 0;
    padding: 0;
    padding: 24px 16px !important;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column !important;
    background-image: none;
    transition: background 0.5s ease-in-out;

    h3 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 22px;
      line-height: 30px;
      color: #343e5a;
      transition: background 0.5s ease-in-out;
    }

    .gallery-card-center {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 60px;
        height: 60px;
        color: #fff;
        border-radius: 50px;
        z-index: 11;
      }
    }

    .card-bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1.5px solid #e4e3e0;

      span {
        font-size: 72px;
        line-height: 76px;
        color: #169622;
        margin: 0;
        padding: 0;
        transition: background 0.5s ease-in-out;
      }

      div {
        p {
          text-transform: lowercase;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          text-align: right;
        }
      }
    }
  }

  &:hover {
    background-image: url(${CardBg});
    transition: background 0.5s ease-in-out;

    .gallery-card {
      background-color: #010e31;
      opacity: 0.7;
      z-index: 10;

      h3 {
        color: #fff;
      }

      .card-bottom {
        span {
          color: #fff;
        }

        p {
          color: #fff;
        }
      }
    }
  }
`;

export default GalleryCard;
