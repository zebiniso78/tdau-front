import React from 'react';
import { Container, ContentCard, CardInfo, H1, Position, SocialParams } from './style';
import rectorImg from 'assets/rectors/rectorPhoto.png';
import QuoteIcon from 'assets/rectors/QuoteIcon.png'
import { useLocation } from 'react-router-dom';

export function ProfileCard() {
   const location = useLocation()
   return (
      <ContentCard>
         <div className="left-img">
            <div className="cubick-rub"> </div>
            <img src={rectorImg} alt="Rector img" />
         </div>
         <div className='card-container'>
            <div className="right-content">
               <H1>Khodzhaev Jamshid<br /> Abdukhakimovich</H1>
               <Position>Rector</Position>
               <CardInfo>
                  <SocialParams>Reception time: Tuesday: <span>15.00-17.00</span> Thursday: <span>15.00-17.00</span></SocialParams>
                  <SocialParams>Reception of the Tashkent State Agrarian University</SocialParams>
                  <SocialParams>Phone: <span>+998 (71) 260 48-00</span></SocialParams>
                  <SocialParams>Fax: <span>+998 (71) 260 38-60</span></SocialParams>
                  <SocialParams>E-mail: <span>qabulxona@agro.uz</span></SocialParams>
               </CardInfo>
            </div>
            {
               location.pathname !== '/university-structure' &&
               <img className="card-img" src={QuoteIcon} alt="quote img" />
            }
         </div>
      </ContentCard>
   );
}
