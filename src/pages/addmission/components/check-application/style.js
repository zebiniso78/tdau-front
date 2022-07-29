import styled from 'styled-components';

export const CheckApplicationProvider = styled.form`
  padding: 15px;
  a {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 20px;
  }
  .info {
    display: flex;
    align-items: center;
    margin: 8px 16px 8px 0;
    padding-right: 8px;
    width: 100%;
    height: 38px;
    background: #eee;
    border: 1px solid #bcc6d4;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    text-indent: 12px;
    span {
      color: #888;
    }
    &::placeholder {
      font-size: 12px;
      color: #a8a8a8;
    }
  }
`;
export const ApplicationTitle = styled.h4`
  /* margin: 24px 0 24px 0px; */
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
  color: #010e31;
  margin: ${(props) =>
    props.type === 'attachments' ? '24px 0 24px 0px' : '24px 0 24px 0px'};
`;
