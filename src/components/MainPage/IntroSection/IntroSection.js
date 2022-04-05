import React from 'react';
import { MyContainer } from './IntroSectionStyle';
import { AiFillEye } from 'react-icons/ai';
import { BsCalendarWeek } from 'react-icons/bs';

function IntroSection() {
  return (
    <>
      <MyContainer>
        <div className="first-page-wrapper">
          <p className="date-info">
            <BsCalendarWeek /> <span>10 января 2021</span>
            <AiFillEye /> <span>236456</span>
          </p>
          <h2 className="first-page-header">
            Прямая связь институтов гражданского общества с государственными
            органами
          </h2>
          <p className="first-page-title">
            В развитых странах водительское удостоверение выдается только тем,
            кто досконально освоил правила вождения. Ветчина ...
          </p>
          <button className="more-button">Подробнее</button>
        </div>
      </MyContainer>
    </>
  );
}

export default IntroSection;
