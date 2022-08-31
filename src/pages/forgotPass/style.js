import styled from 'styled-components';

export const WrapperChangePAss = styled.div`
  padding-bottom: 40px;
  .ant-steps-item-icon {
    .ant-steps-icon {
      svg {
        margin-bottom: 8px;
      }
    }
  }

  input {
    display: inline-block;
    width: 100%;
    border: 1px solid #d9d9d9;
    outline: none;
    padding: 4px 8px;
    font-size: 14px;
  }
`;

export const Paper = styled.div`
  width: 100%;
  padding: 0 40px 20px;
  background-color: #fff;
  border-radius: 8px;

  @media (max-width: 991px) {
    padding: 0 20px 20px;
  }
`;
