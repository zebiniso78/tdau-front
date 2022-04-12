import styled from 'styled-components';

export const PersonalInfoProvider = styled.form`
  padding: 15px;
  & .col-lg-3 {
    margin-top: 20px;
  }
  & h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #010e31;
  }
  .input-error {
    border: 1px solid #d2504d;
  }
  input {
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }
  .select-error > div {
    border: 1px solid #d2504d;
  }
`;
export const ButtonsProvider = styled.div`
  margin-top: 30px;
  & .next-btn {
    margin-left: 20px;
    background: #169622 !important;
    border-radius: 4px;
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif;
  }
  & .prev-btn {
    color: #eb5757;
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif;
    border: 1px solid #eb5757 !important;
  }
  & .save-btn {
    /* color: #169622; */
    margin-left: 20px;
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif;
    /* border: 1px solid #eb5757 !important; */
  }
`;

export const Error = styled.div`
  color: #d2504d;
  font-size: 12px;
  margin-top: -2px;
  border-radius: 4px;
  padding: 2px 8px;
  &.select-error-tooltip {
    margin-top: 6px;
  }
`;
