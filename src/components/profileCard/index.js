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
import Director from 'assets/director/director.png'

export function ProfileCard({ item }) {
  const location = useLocation();
  return (
    <ContentCard>
      <div className="left-img">
        <div className="cubick-rub"> </div>
        <img
          src={location.pathname !== '/director-page' ? `${process.env.REACT_APP_API_SECOND_ROOT}/${item?.photo}` : Director}
          alt="Rector img"
        />
      </div>
      <div className="card-container">
        <div className="right-content">
          <H1>{location.pathname !== '/director-page' ? item?.fullname : 'Khasanov Shavkat Tursunkulovich'}</H1>
          <Position>{location.pathname !== '/director-page' ? item?.desc : 'Director'}</Position>
          <CardInfo>
            <SocialParams>
              Reception time: <span>{location.pathname !== '/director-page' ? item?.reception_time : 'Tuesday - Saturday, 14:00 - 17:00'}</span>
            </SocialParams>
            <SocialParams>
              Reception of the Tashkent State Agrarian University
            </SocialParams>
            <SocialParams>
              Phone: <span>{location.pathname !== '/director-page' ? item?.phone : '+998 (66) 492 81-16'}</span>
            </SocialParams>
            {
              location.pathname !== '/director-page' && (
                <SocialParams>
                  Fax: <span>{item?.phone}</span>
                </SocialParams>
              )
            }
            <SocialParams>
              E-mail: <span>{location.pathname !== '/director-page' ? item?.email : 'hasanov_sh@samaguni.uz'}</span>
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
