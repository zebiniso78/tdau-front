import styled from 'styled-components';

export const AdditionalInfoProvider = styled.form`
  padding-bottom: 80px;
  & .col-lg-3 {
    margin-top: 20px;
  }
  & h4 {
    margin: 24px 0 24px 0px;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #010e31;
  }

  & p {
    margin: 0;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 13.5px;
    line-height: 19px;
    color: #313131;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 20px !important;

  sup {
    color: #eb5757;
    font-size: 16px;
    top: 0;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ButtonWrapper = styled.div`
  .next-btn {
    font-family: 'Inter';
    background-color: #169622;
    margin-left: 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
    text-transform: capitalize;
    &:hover {
      background-color: #169622;
    }
    &:active {
      transform: translateY(1px);
      transition: all 0.1s ease;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  }

  .prev-btn {
    font-family: 'Inter';
    border: 1px solid #eb5757;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #eb5757;
    text-transform: capitalize;
    &:hover {
      border: 1px solid #eb5757;
    }
    &:active {
      transform: translateY(1px);
      transition: all 0.1s ease;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
`;

