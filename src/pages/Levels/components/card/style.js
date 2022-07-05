import styled from 'styled-components';

export const CardProvider = styled.div`
  margin: 80px 0;
`;
export const ItemCard = styled.div`
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(250px);
  min-height: 300px;
  border-radius: 4px;
  @media (max-width: 576px) {
    min-height: auto;
  }
`;
export const CardTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 58px;
  text-align: center;
  text-transform: uppercase;
  color: #142e38;
  margin-bottom: 40px;
`;
export const CardHeader = styled.div`
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const Image = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CardBody = styled.div`
  padding: 24px;
`;
export const Title = styled.h5`
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #142e38;
`;
