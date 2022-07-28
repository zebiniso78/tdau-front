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
import { useTranslation } from 'react-i18next';

export function EventCalendar() {
  const { calendarList } = useList();
  const { SamplePrevArrow, SampleNextArrow } = useArrowFunctions();
  const { t } = useTranslation();
  return (
    <CardProvider>
      <LandingTitle>{t('event-calendar')}</LandingTitle>
      <CardWrap>
        <Slider
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
          {...settings}
        >
          {calendarList.map((item, index) => (
            <CardComponent
              className="card-calendar"
              key={item.id}
              type="event_calendar"
              status={item.title_bill}
              image={`${process.env.REACT_APP_API_SECOND_ROOT}/uploads/images/${item.picture_bill}`}
              cardLogo={Academia}
              aosCount={index * 1000}
              training_date={item.date_bill}
              title={item.title_bill}
              description={item.time_desc}
              starting_date={item.time_bill}
            />
          ))}
        </Slider>
      </CardWrap>
    </CardProvider>
  );
}
