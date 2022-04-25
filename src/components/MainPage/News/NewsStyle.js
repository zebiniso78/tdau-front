import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  padding: 60px 0;
  /* display: inline-block; */

  .news-title__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 24px;
      line-height: 32px;
      color: #169622;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      text-decoration: none;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #45ab4e;

      svg {
        margin-left: 10px;
      }
    }
  }

  .news-card__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .one-card__wrapper {
    width: 30%;
  }

  .several-cards__wrapper {
    width: 46%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;

    .small-cards {
      box-sizing: border-box;
      width: 49.5% !important;
      margin-bottom: 8px;

      h3 {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 6px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  .news-posts__wrapper {
    width: 22%;
  }
`;
