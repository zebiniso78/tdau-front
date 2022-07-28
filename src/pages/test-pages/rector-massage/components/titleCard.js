import React from 'react';
import {
  Container,
  ContentCard,
  ContentParagraf,
  H1,
  Position,
} from '../container/style';
import rectorImg from 'assets/rectors/rectorPhoto.png';
import QuoteIcon from 'assets/rectors/QuoteIcon.png';
import RecAcc from 'assets/rector/account.png';

function TitleCard({ desc, rector_photo, rector_name }) {
  return (
    <ContentCard>
      <div data-aos="fade-up" className="left-img">
        <div className="cubick-rub"> </div>
        <img
          src={
            rector_photo
              ? `${process.env.REACT_APP_API_SECOND_ROOT}/${rector_photo}`
              : RecAcc
          }
          alt="Rector img"
        />
      </div>
      <div data-aos="fade-up" className="card-container">
        <div className="right-content">
          <H1>{rector_name}</H1>
          <Position>Rector</Position>
          <ContentParagraf>{desc}</ContentParagraf>
        </div>
        <img className="card-img" src={QuoteIcon} alt="quote img" />
      </div>
    </ContentCard>
  );
}

export default TitleCard;
