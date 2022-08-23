import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  .slick-dots li button::before {
    content: '' !important;
    display: none;
  }
  .ant-carousel .slick-dots {
    position: absolute;
    display: block !important;
    margin-right: 0;
    margin-left: 0;
    padding-left: 0;
  }
`;
export const CarouselItem = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: calc(100vh - 80px);
  z-index: 99;
  position: relative;
`;
export const CarouselTextContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  .vt-tour {
    border: none;
    outline: none;
    background-color: rgba(213, 238, 198, 0.5);
    border-radius: 16px;
    padding: 8px 16px;
    display: inline-block;
    margin-bottom: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
export const MainInfoTitle = styled.h1`
  color: #fff;
  max-width: 600px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
`;
