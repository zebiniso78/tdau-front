import styled from 'styled-components';

export const ArticleProvider = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between; */
  margin: 50px 0;

  /* flex-wrap: wrap;
  @media (max-width: 676px) {
    display: flex;
    flex-direction: column;
  } */
`;
export const ArticleLeft = styled.div`
  width: 50%;
  height: auto;
  font-family: 'Inter', sans-serif;
  @media (max-width: 676px) {
    width: 100%;
  }
`;
export const ArticleLeftTitle = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: justify;
  font-size: 17px;
  text-transform: uppercase;
  color: #142e38;
`;

export const ArticleRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 50%;
  height: auto;
  @media (max-width: 676px) {
    width: 100%;
  }
`;
export const ArticleDescription = styled.p`
  width: 95%;
  font-style: normal;
  font-size: 14px !important;
  line-height: 24px;
  text-align: justify;
  font-size: 17px;
  color: #142e38;
`;
export const RightContent = styled.div`
  width: 95%;
  height: auto;
  border: 1.79003px solid #d2d2d2;
  border-top-color: transparent;
  border-right-color: transparent;
  padding: 15px 40px;
  &:last-child {
    border-bottom-color: transparent;
  }
  @media (max-width: 991px) {
    width: 95%;
    margin-right: auto;
    border: none;
    padding: 0;
  }
`;

export const ContentTitle = styled.h5`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  text-align: justify;
  text-transform: uppercase;
  color: #142e38;
  margin-bottom: 10px;
`;

export const ContentInfo = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
  color: #142e38;
`;
