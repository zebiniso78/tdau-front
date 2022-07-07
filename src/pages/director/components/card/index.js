import React from 'react';
import {
  Container,
  ContentCard,
  CardInfo,
  H1,
  Position,
  SocialParams,
} from './style';
import QuoteIcon from 'assets/rectors/QuoteIcon.png';
import { useLocation } from 'react-router-dom';
import Director from 'assets/director/director.png';

export function ProfileCard({ item }) {
  const location = useLocation();
  return (
    <ContentCard data-aos="fade-up">
      <div className="left-img">
        <div className="cubick-rub"> </div>
        <img
          src={
            location.pathname !== '/director-page'
              ? `${process.env.REACT_APP_API_SECOND_ROOT}/${item?.rector_photo}`
              : Director
          }
          alt="Rector img"
        />
      </div>
      <div className="card-container">
        <div className="right-content">
          <H1>{item?.rector_name}</H1>
          <Position>Director</Position>
          <CardInfo>
            <SocialParams>
              Reception time: <span>{item?.rector_reception}</span>
            </SocialParams>

            <SocialParams>
              Phone: <span> {item?.rector_phone}</span>
            </SocialParams>

            <SocialParams>
              E-mail: <span>{item?.rector_email}</span>
            </SocialParams>

            <SocialParams>
              Address: <span>{item?.rector_address}</span>
            </SocialParams>
          </CardInfo>
        </div>
        {location.pathname !== '/university-structure' && (
          <img
            data-aos="fade-up"
            className="card-img"
            src={QuoteIcon}
            alt="quote img"
          />
        )}
      </div>
    </ContentCard>
  );
}
