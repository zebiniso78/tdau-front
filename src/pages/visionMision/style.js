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
  }

  p {
    font-size: 16px;
    margin-bottom: 0;
  }
`;
