import { Container } from '../../../common/grid';
import styled from 'styled-components';

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  .first-page-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 160px 0;
  }

  .date-info {
    display: flex;
    align-items: center;
    color: #a1b4d2;
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-bottom: 8px;

    span {
      margin-right: 14px;
    }

    svg {
      margin-right: 6px;
    }
  }

  .first-page-header {
    width: 60%;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    color: #ffffff;
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }

  .first-page-title {
    width: 60%;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
  }

  .more-button {
    font-size: 16px;
    background: transparent;
    border-radius: 50px;
    padding: 14px 28px;
    border: 1px solid rgba(22, 150, 34, 0.7);
    color: white;
    transition: 0.5s;

    :hover {
      border: 1px solid rgba(22, 150, 34, 0.7);
      background-color: rgba(22, 150, 34, 0.7);
    }
  }
`;
