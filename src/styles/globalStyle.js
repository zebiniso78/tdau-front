import styled from "styled-components";
export const StyleSelectAll = styled.div`
  border-radius: 4px;
   
  & > div > div {
    width: 100%;
    /* border-color: transparent !important; */
    box-shadow: inset 0 0 0 0 !important;
    margin-top: 4px;
    & > div:nth-child(2) span {
      display: none;
    }
  }
  & > div > div:nth-child(3) > div:nth-child(1) {
    height: 36px;
    cursor: pointer;
  }

  & > div > div:nth-child(4) {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2) !important;
    padding: 8px 4px 8px 4px;
    z-index: 3 !important;
    & > div:nth-child(1) {
      .css-1n7v3ny-option {
        background: #f1f1f1 !important;
        color: #000;
      }
      .css-9gakcf-option {
        background: #f1f1f1 !important;
        color: #000;
      }

      ::-webkit-scrollbar {
        width: 5px;
        margin-right: 15px !important;
      }
      ::-webkit-scrollbar-track {
        // background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #9d9d9d;
        border-radius: 3px;
        margin-right: 40px !important;
      }
    }
  }
  .css-1pahdxg-control {
    /* border: 2px solid #12aae4 !important; */
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  .css-1s2u09g-control {
    /* border: 2px solid #f1f1f1 !important; */
    background-color: #f1f1f1;
    border-radius: 4px;
  }
  &.error > div > div {
    border-color: red !important;
  }
  &.error {
    & div {
      & div {
        border-color: transparent !important;
      }
    }
    .css-1pahdxg-control {
      border-color: transparent !important;
      background-color: #f1f1f1;
    }
  }
`;

export const Title = styled.h4`
font-family: 'Open Sans', sans-serif;
font-weight: 700;
font-size: 20px;
color: #010E31;
&.form-title {
  font-weight: 600;
  font-size: 18px;
}
`