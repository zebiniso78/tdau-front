import { systemColors } from 'assets/styles/colors';
import styled from 'styled-components';

export const TextContent = styled.div`
  text-align: justify;
  h2 {
    font-weight: bold;
    color: #318161;
  }

  &.content {
    padding: 24px 0;
  }
  h3 {
    font-weight: bold;
    font-size: 70px;
    text-align: center;
    &:nth-of-type(1) {
      color: rgb(14 44 28);
    }
    &:nth-of-type(2) {
      color: rgb(12 62 38);
    }
    &:nth-of-type(3) {
      color: rgb(10 80 48);
    }
    &:nth-of-type(4) {
      color: rgb(8 97 58);
    }
    &:nth-of-type(5) {
      color: rgb(6 115 68);
    }
  }
  p {
    font-size: 16px;
    margin-bottom: 0;
  }
`;
