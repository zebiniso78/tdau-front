import { CardComponent } from 'components/card';
import React, { useState } from 'react';
import { LandingTitle, CardProvider, CardWrap } from 'styles/globalStyle';
import Academia from 'assets/cards/academiya.png';
import { Col, Row } from 'antd';
import { useList } from './useList';
import Calendar from 'assets/cards/calendar.png';
import CardSecond from 'assets/cards/second_card.png';
import CardThird from 'assets/cards/third_card.png';
import CardFour from 'assets/cards/four_card.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from './systemSettings';
import { useArrowFunctions } from './useArrowFunctions';

export function EventCalendar() {
  const { calendarList } = useList();
  const { SamplePrevArrow, SampleNextArrow } = useArrowFunctions();

  return (
    <CardProvider>
      <LandingTitle>UNIVERSITY EVENT CALENDAR</LandingTitle>
      <CardWrap>
        <Slider
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          {...settings}
        >
          {calendarList.map((item, index) => (
            <CardComponent
              key={item.id}
              type={item.type}
              status={item.status}
              image={item.image}
              cardLogo={Academia}
              aosCount={index * 1000}
              training_date={item.training_date}
              title={item.title}
              description={item.description}
              starting_date={item.starting_date}
            />
          ))}
        </Slider>
      </CardWrap>
    </CardProvider>
  );
}
