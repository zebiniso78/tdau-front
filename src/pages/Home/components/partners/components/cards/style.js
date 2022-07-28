import styled from 'styled-components';

export const CardProvider = styled.div`
  height: auto;
  margin: 70px 0;
`;
export const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 0 16px;
    justify-content: center;
  }
`;
