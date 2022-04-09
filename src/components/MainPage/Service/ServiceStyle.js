import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  h2 {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 32px;
    line-height: 36px;
    color: #169622;
    margin-bottom: 32px;
  }

  @media (max-width: 1440px) {
    h2 {
      font-size: 28px;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 24px;
    }
  }
`;

export const Cards = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between !important;
  align-items: stretch;
  flex-wrap: wrap;

  .service-card {
    text-align: left;
    width: 32%;

    img {
      margin: 0;
      padding: 0;
      margin-bottom: 16px;
    }

    h2 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 28px;
      line-height: 32px;
      color: #3b3b3a;
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      padding: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #777674;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 1440px) {
    h2 {
      font-size: 24px !important;
    }

    p {
      font-size: 17px !important;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 20px !important;
    }

    p {
      font-size: 14px !important;
    }
  }
`;
