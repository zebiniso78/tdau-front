import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  padding: 60px 0;
  display: flex;
  flex-direction: column;

  .news-title__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 32px;
      line-height: 36px;
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
      font-size: 20px;
      line-height: 24px;
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
    width: 33%;

    .one-card {
      h3 {
        font-size: 24px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  .several-cards__wrapper {
    width: 45%;
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
        margin-bottom: 6px;
      }

      p {
        font-size: 13px;
      }
    }
  }

  .news-posts__wrapper {
    width: 20%;
  }

  @media (max-width: 1440px) {
    h2 {
      font-size: 28px !important;
    }

    a {
      font-size: 18px !important;
    }

    .one-card {
      h3 {
        font-size: 18px !important;
      }

      p {
        font-size: 14px !important;
        line-height: 18px;
      }
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 24px !important;
    }

    a {
      font-size: 16px !important;
    }
    .one-card {
      h3 {
        font-size: 16px !important;
      }

      p {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
`;
