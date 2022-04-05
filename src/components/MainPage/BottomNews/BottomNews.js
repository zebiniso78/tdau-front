import React from 'react';
import {
  AiFillEye,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BsCalendarWeek } from 'react-icons/bs';
import { MyContainer, BottomSection } from './BottomNewsStyle';
import { FiMail } from 'react-icons/fi';

function BottomNews() {
  return (
    <>
      <BottomSection>
        <MyContainer>
          <ul>
            <li className="buttons">
              <button className="button-right">
                <AiOutlineArrowRight />
              </button>
              <button className="button-left">
                <AiOutlineArrowLeft />
              </button>
            </li>
            <li>
              <h2>
                «Любой малыш за ваши деньги». Как разоблачили преступную группу,
                поставив...
              </h2>
              <p>
                Вы слышали о преступной группе, которая за 5 лет продала в
                Ташкенте 70 младенцев? Глава группировки взяла под...
              </p>
              <p className="date-info">
                <BsCalendarWeek /> <span>10 января 2021</span>
                <AiFillEye /> <span>236456</span>
              </p>
            </li>
            <li>
              <h2>
                «Любой малыш за ваши деньги». Как разоблачили преступную группу,
                поставив...
              </h2>
              <p>
                Вы слышали о преступной группе, которая за 5 лет продала в
                Ташкенте 70 младенцев? Глава группировки взяла под...
              </p>
              <p className="date-info">
                <BsCalendarWeek /> <span>10 января 2021</span>
                <AiFillEye /> <span>236456</span>
              </p>
            </li>
            <li>
              <h2>
                «Любой малыш за ваши деньги». Как разоблачили преступную группу,
                поставив...
              </h2>
              <p>
                Вы слышали о преступной группе, которая за 5 лет продала в
                Ташкенте 70 младенцев? Глава группировки взяла под...
              </p>
              <p className="date-info">
                <BsCalendarWeek /> <span>10 января 2021</span>
                <AiFillEye /> <span>236456</span>
              </p>
            </li>
            <li className="message">
              <button>
                <FiMail />
              </button>
            </li>
          </ul>
        </MyContainer>
      </BottomSection>
    </>
  );
}

export default BottomNews;
