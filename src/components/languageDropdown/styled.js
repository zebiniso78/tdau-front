import styled from 'styled-components';
export const Lang = styled.div`
  margin-left: 4px;
  width: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding-top: 13px;
  svg {
    width: 8px;
  }
  @media (max-width: 991px) {
    /* margin-top: 16px !important; */
    padding-top: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #142f38;
    font-size: 16px;
    cursor: pointer;
  }
`;
