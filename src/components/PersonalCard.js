import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiFileList2Line } from 'react-icons/ri';
import { BsChatText } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';

const PersonalCard = (props) => {
  const data = [
    {
      title: 'Личная информация',
      img: <AiOutlineUser />,
    },
    {
      title: 'История приложений',
      img: <RiFileList2Line />,
    },
    {
      title: 'Вопросы и ответы',
      img: <BsChatText />,
    },
    {
      title: 'Выход',
      img: <ImExit />,
    },
  ];
  return (
    <>
      <Card>
        <div className="personal-card__heading">
          <span>
            <FaRegUserCircle />
          </span>
          <h2>{props.title}</h2>
        </div>
        <ul>
          {data.map((e) => (
            <li>
              <span>{e.img}</span>
              <p>{e.title}</p>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;

  .personal-card__heading {
    margin: 0;
    padding: 0;
    padding: 24px;
    padding-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
      width: 72px;
      height: 72px;
      background: #fff;
      color: #d0cfcc;
      margin-right: 12px;
    }
    h2 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      text-align: left;
      font-size: 16px;
      line-height: 22px;
      color: #010e31;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    padding: 8px 0;
    list-style: none;
    text-align: left;

    li {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10px 24px;
      transition: 0.5s;

      &:hover {
        background-color: #e8f5e9;
        svg,
        p {
          color: #169622;
        }
      }

      svg {
        width: 24px;
        height: 20px;
        color: #313131;
        margin-right: 12px;
        transition: 0.5s;
      }

      p {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        color: #313131;
        transition: 0.5s;
      }
    }
  }
`;

export default PersonalCard;
