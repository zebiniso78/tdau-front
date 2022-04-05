import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  h2 {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 32px;
    color: #169622;
    margin-bottom: 32px;
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
    width: 28%;

    img {
      margin: 0;
      padding: 0;
      margin-bottom: 16px;
    }

    h2 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      color: #3b3b3a;
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      padding: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #777674;
      margin-bottom: 16px;
    }
  }
`;
