import React from 'react';
import { Carousel } from 'antd';
import {
  Image,
  CarouselLayout,
  TextContent,
  LeftContent,
  RightContent,
} from './style';
import 'antd/dist/antd.css';
import { MainBtn, MainBtnWrap } from 'pages/Home/components/main/style';
import { ReactComponent as Facebook } from 'assets/carousel/icon/f.svg';
import { ReactComponent as Telegram } from 'assets/carousel/icon/tg.svg';
import { ReactComponent as Instagram } from 'assets/carousel/icon/intagram.svg';
const contentStyle = {
  width: '100vw',
  // minHeight: '100vh',
  // color: 'red',
  lineHeight: '160px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function CarouselComponent({ first, second, third, four }) {
  return (
    <Carousel autoplay effect="fade">
      <CarouselLayout style={contentStyle}>
        <Image src={first} alt="first" />
        <TextContent className="tdau-item">
          <LeftContent>
            <h2>WSB University in Poland</h2>
            <p>
              Applications are now Open for the Academic year 2022-2023 for
              Undergraduate and Postgraduate courses!
            </p>
            <MainBtnWrap style={{ marginTop: '16px' }}>
              <MainBtn type="button">Apply</MainBtn>
            </MainBtnWrap>
          </LeftContent>
          <RightContent className="tdau-item-two">
            <div className="item">
              <a href="https://www.facebook.com/asadbek.azamov.399">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/azamov_9909/">
                <Instagram />
              </a>
              <a href="https://t.me/AsadbekAzamov01">
                <Telegram />
              </a>
              <div className="line"></div>
            </div>
          </RightContent>
        </TextContent>
      </CarouselLayout>

      <CarouselLayout style={contentStyle}>
        <Image src={second} alt="second" />
        <TextContent className="tdau-item">
          <LeftContent>
            <h2>Vytautas Magnus University</h2>
            <p>
              Applications are now Open for the Academic year 2022-2023 for
              Undergraduate and Postgraduate courses!
            </p>
            <MainBtnWrap style={{ marginTop: '16px' }}>
              <MainBtn type="button">Apply</MainBtn>
            </MainBtnWrap>
          </LeftContent>
          <RightContent className="tdau-item-two">
            <div className="item">
              <a href="https://www.facebook.com/asadbek.azamov.399">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/azamov_9909/">
                <Instagram />
              </a>
              <a href="https://t.me/AsadbekAzamov01">
                <Telegram />
              </a>
              <div className="line"></div>
            </div>
          </RightContent>
        </TextContent>
      </CarouselLayout>

      <CarouselLayout style={contentStyle}>
        <Image src={third} alt="third" />
        <TextContent className="tdau-item">
          <LeftContent>
            <h2>Volgograd State Agricultural University</h2>
            <p>
              Applications are now Open for the Academic year 2022-2023 for
              Undergraduate and Postgraduate courses!
            </p>
            <MainBtnWrap style={{ marginTop: '16px' }}>
              <MainBtn type="button">Apply</MainBtn>
            </MainBtnWrap>
          </LeftContent>
          <RightContent className="tdau-item-two">
            <div className="item">
              <a href="https://www.facebook.com/asadbek.azamov.399">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/azamov_9909/">
                <Instagram />
              </a>
              <a href="https://t.me/AsadbekAzamov01">
                <Telegram />
              </a>
              <div className="line"></div>
            </div>
          </RightContent>
        </TextContent>
      </CarouselLayout>

      <CarouselLayout style={contentStyle}>
        <Image src={four} alt="four" />
        <TextContent className="tdau-item">
          <LeftContent>
            <h2>Moscow Timiryazev Agricultural Academy</h2>
            <p>
              Applications are now Open for the Academic year 2022-2023 for
              Undergraduate and Postgraduate courses!
            </p>
            <MainBtnWrap style={{ marginTop: '16px' }}>
              <MainBtn type="button">Apply</MainBtn>
            </MainBtnWrap>
          </LeftContent>
          <RightContent className="tdau-item-two">
            <div className="item">
              <a href="https://www.facebook.com/asadbek.azamov.399">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/azamov_9909/">
                <Instagram />
              </a>
              <a href="https://t.me/AsadbekAzamov01">
                <Telegram />
              </a>
              <div className="line"></div>
            </div>
          </RightContent>
        </TextContent>
      </CarouselLayout>
    </Carousel>
  );
}
