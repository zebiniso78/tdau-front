import styled from 'styled-components';

export const DiscoverProvider = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Inter';
  width: calc(100% - 182px);
  margin: 71px auto;
  @media (max-width: 676px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* width: calc(100% - 40px); */
  }
`;
export const DiscoverLeft = styled.div`
  width: 30%;
`;
export const DiscoverRight = styled.div`
  width: 70%;
  & p:first-child {
    font-style: normal;
    font-weight: ${(props) =>
      props.discoverType === 'magnusUniversity' ? '400' : '700'};
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: #142e38;
  }
  p {
    font-size: 14px;
    text-align: justify;
    line-height: 24px;
    color: #142e38;
  }
  @media (max-width: 676px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 58px;
  color: #142e38;
`;
