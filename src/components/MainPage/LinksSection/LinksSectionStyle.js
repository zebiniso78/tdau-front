import styled from 'styled-components';
import { Container } from '../../../common/grid';

export const MyContainer = styled(Container)`
  text-align: left;
  h2 {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 24px;
    line-height: 32px;
    color: #169622;
    margin-bottom: 32px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
`;
