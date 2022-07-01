import styled from 'styled-components';

export const Card = styled.div`
  width: ${(props) =>
    props.type === 'event_calendar' ? '90% !important' : '100%'};
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0px 11.1735px 27.9339px #dfd9ce;
  border-radius: 4.88166px;
  /* height: auto; */
  min-height: 390px;
  margin: 0 15px;
  cursor: pointer;
  height: ${(props) => (props.type === 'university' ? '450px' : 'auto')};
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const CardHeader = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4.88166px;
  min-height: 200px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  & img {
    width: 100%;
    max-height: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 4.88166px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.2);
      border-radius: 4.88166px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
export const CardBody = styled.div`
  text-align: center;
  margin: 11px 0;
  & img {
    width: 70%;
  }
`;
export const CardFooter = styled.div``;
export const CardFooterTitle = styled.h5`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #142e38;
  padding: 25px 10px;
  & p {
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    text-align: left;
    margin-left: 10px;
    color: #318161;
  }
`;
export const CardInfo = styled.div`
  & h5 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #318161;
    text-align: left;
    margin-left: 21px;
  }
  & p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #142e38;
    padding: 0 21px;
    text-align: left;
  }
`;
export const TrainingDate = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 35px;
  background: #318161;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
