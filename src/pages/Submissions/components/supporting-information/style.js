import styled from 'styled-components';

export const SupportingInformationProvider = styled.form`
  padding-bottom: 80px;
  & .col-lg-3 {
    margin-top: 20px;
  }
  & h4 {
    margin: 24px 0 40px 0px;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #010e31;
  }
  & p {
    margin: 0;
    margin-top: 20px;
    margin-bottom: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 13.5px;
    line-height: 19px;
    color: #313131;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h5 {
      width: 33%;
      color: #343e5a;
      font-weight: 600;
      font-size: 20px;
    }

    hr {
      width: 65%;
    }

    .resume-title {
      width: 23%;
    }

    .resume-hr {
      width: 77%;
    }
  }
`;
