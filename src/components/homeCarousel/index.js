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
export default function HomeCarousel() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Carousel autoplay>
        <CarouselItem img={'https://picsum.photos/900'}>
          <CarouselTextContent>
            <Container>
              <div className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>

        <CarouselItem img={'https://picsum.photos/900'}>
          <CarouselTextContent>
            <Container>
              <div className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>
        <CarouselItem img={'https://picsum.photos/900'}>
          <CarouselTextContent>
            <Container>
              <div className="content">
                <button className="vt-tour">{t('vr-tour')}</button>
                <MainInfoTitle>{t('tdau')}</MainInfoTitle>
              </div>
            </Container>
          </CarouselTextContent>
        </CarouselItem>
        <CarouselItem img={'https://picsum.photos/900'}>
          <CarouselTextContent>
            <Container>
              <div className="content">
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
