import React from 'react';
import {
  Container,
  ContentCard,
  CardInfo,
  H1,
  Position,
  SocialParams,
} from './style';
import rectorImg from 'assets/rectors/rectorPhoto.png';
import QuoteIcon from 'assets/rectors/QuoteIcon.png';
import { useLocation } from 'react-router-dom';

export function ProfileCard({ item }) {
  const location = useLocation();
  return (
    <ContentCard>
      <div className="left-img">
        <div className="cubick-rub"> </div>
        <img
          src={`${process.env.REACT_APP_API_SECOND_ROOT}/${item?.photo}`}
          alt="Rector img"
        />
      </div>
      <div className="card-container">
        <div className="right-content">
          <H1>{item?.fullname}</H1>
          <Position>{item?.desc}</Position>
          <CardInfo>
            <SocialParams>
              Reception time: <span>{item?.reception_time}</span>
            </SocialParams>
            <SocialParams>
              Reception of the Tashkent State Agrarian University
            </SocialParams>
            <SocialParams>
              Phone: <span>{item?.phone}</span>
            </SocialParams>
            <SocialParams>
              Fax: <span>{item?.phone}</span>
            </SocialParams>
            <SocialParams>
              E-mail: <span>{item?.email}</span>
            </SocialParams>
          </CardInfo>
        </div>
        {location.pathname !== '/university-structure' && (
          <img className="card-img" src={QuoteIcon} alt="quote img" />
        )}
      </div>
    </ContentCard>
  );
}
