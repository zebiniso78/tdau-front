import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const BottomSection = styled.section`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 32px 0;
`;

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      width: 27%;
      border-left: 2px solid #169622;
      padding-left: 8px;
      h2 {
        box-sizing: border-box;
        text-align: left;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
        margin: 0;
        padding: 0;
        margin-bottom: 6px;
      }
      p {
        box-sizing: border-box;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 14px;
        color: #ffffff;
        margin: 0;
        padding: 0;
        margin-bottom: 12px;
      }
      .date-info {
        display: flex;
        align-items: center;
        color: #a1b4d2;
        font-size: 11px;
        margin: 0;
        padding: 0;

        span {
          margin-right: 12px;
        }

        svg {
          margin-right: 4px;
        }
      }
    }

    .buttons {
      width: 8%;
      dislay: flex;
      flex-direction: column;
      border: none;

      button {
        display: block;
        padding: 12px 36px;
        border-radius: 50px;
      }
      .button-right,
      .button-left {
        color: white;
        background: transparent;
        border: 1px solid #999ca6;
        box-sizing: border-box;
        margin-bottom: 8px;
        transition: 0.5s;

        :hover {
          border: 1px solid #169622;
          background-color: #169622;
          color: white;
        }
      }
    }
  }

  .message {
    width: 4%;
    border: none;

    button {
      border: none;
      color: #fff;
      margin: 0;
      padding: 0;
      padding: 6px 8px;
      border-radius: 50px;
      background: #169622;
      box-shadow: 0px 0px 1px 10px rgba(22, 150, 34, 1);
    }
  }
`;
