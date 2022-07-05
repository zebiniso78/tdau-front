import styled from 'styled-components';

export const ProgramContainer = styled.div`
  width: calc(100% - 145px);
  margin: 0 auto;
  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;
export const ProgramProvider = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
