import styled from 'styled-components';

export const MyFooter = styled.section`
  background-color: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
  padding: 36px 0 28px 0;

  h2 {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 32px;
    color: #169622;
    margin-bottom: 32px;
  }

  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;

    li {
      width: 17%;
      box-sizing: border-box;
      :first-child {
        width: 20%;
      }

      h4 {
        margin: 0;
        padding: 0;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #169622;
        margin-bottom: 6px;
      }

      p {
        margin: 0;
        padding: 0;
        text-align: left;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #3b3b3a;

        svg {
          margin-right: 8px;
          width: 20px !important;
          height: 20px !important;
          color: #3b3b3a;
        }
      }
    }
  }

  .days {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .working-days,
    .add-days {
      text-align: left;

      h4 {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #169622;
        margin-bottom: 4px;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          margin: 0;
          padding: 0;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          color: #3b3b3a;
          margin-right: 12px;
          border: 1px solid #3b3b3a;
          box-sizing: border-box;
          border-radius: 6px;
          padding: 8px 16px;

          span {
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
  }

  .map {
    width: 100%;
    height: 30% !important;
    padding: 28px 0;
    overflow: hidden;

    iframe {
      width: 100%;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }

  .additional {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
      padding: 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #777674;
    }

    div {
      text-align: right;

      img {
        width: 20%;
        margin-left: 12px;
      }
    }
  }
`;
