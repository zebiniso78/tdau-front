import Background from '../assets/main-bg.png';
import styled from 'styled-components';
import { Container } from '../common/grid';

export const Header = styled.header`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
`;

export const MyContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const MainBottom = styled.section`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      width: 25%;
      border-left: 2px solid #169622;
      padding-left: 8px;
      h2 {
        box-sizing: border-box;
        text-align: left;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
        margin: 0;
        padding: 0;
        margin-bottom: 4px;
      }
      p {
        box-sizing: border-box;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
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
        font-size: 10px;
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
      .button-right {
        color: white;
        background: transparent;
        border: 1px solid #999ca6;
        box-sizing: border-box;
        margin-bottom: 8px;
      }

      .button-left {
        border: none;
        background: #169622;
        color: white;
      }
    }
  }

  .message {
    width: 6%;
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

export const MainBody = styled.main`
  background-color: #edece8;
  padding: 120px 0;
`;

export const TitleSection = styled.section`
  padding: 52px 0;
  overflow-y: hidden;
  overflow-x: hidden;
  h2 {
    text-align: left;
    width: 200%;
    text-transform: uppercase;
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    outline: hidden;
    font-size: 60px;
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
    color: #b5a682;
  }
`;
