import React from 'react';
import { Carousel } from 'antd';
import {
  CarouselItem,
  CarouselTextContent,
  MainInfoTitle,
  Wrapper,
} from './style';
import { useTranslation } from 'react-i18next';
import { Container } from 'styles/globalStyle';
import Img1 from 'assets/main/carousel1.png';
import Img2 from 'assets/main/2carousel.jpg';
export default function HomeCarousel() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Carousel autoplay={true}>
        <CarouselItem img={Img1}>
          <CarouselTextContent>
            <Container>
              <div data-aos="fade-up" className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>

        <CarouselItem img={Img2}>
          <CarouselTextContent>
            <Container>
              <div data-aos="fade-up" className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>

        <CarouselItem img={Img1}>
          <CarouselTextContent>
            <Container>
              <div data-aos="fade-up" className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>

        <CarouselItem img={Img2}>
          <CarouselTextContent>
            <Container>
              <div data-aos="fade-up" className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>
      </Carousel>
    </Wrapper>
  );
}
