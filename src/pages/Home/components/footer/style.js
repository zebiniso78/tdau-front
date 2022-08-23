import styled from 'styled-components';

export const FooterProvider = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.25);
  border: 1.2px solid #ffffff;
  box-shadow: 0px 60px 60px #dfd9ce;

  & ul li {
    list-style: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    text-align: right;
    color: #142f38;
  }
  & ul li:first-child {
    font-family: 'Inter';
    font-weight: 700;
    font-size: 16px;
    line-height: 27px;
    color: #142f38;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    text-align: center;
    overflow-x: hidden;
    .foot {
      li {
        text-align: center;
      }
    }
  }
`;
export const HorizontalLine = styled.hr`
  border: 1px solid #1a3237;
`;
export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  & p:first-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    color: #142e38;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  & p:last-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #142e38;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const FooterImage = styled.div`
  position: absolute;
  bottom: 0;
  @media (max-width: 991px) {
    img {
      max-width: 100%;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  a {
    color: #142e38;
    font-size: 20px;
    margin: 0 4px;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
