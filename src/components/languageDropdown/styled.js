import styled from 'styled-components';
export const DropdownElement = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;

  ul {
    min-width: 160px;
    transform: scale(0);
    position: absolute;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0px 10px 25px #dfd9ce;
    padding: 8px;
    text-align: left;
    margin: 0;
    list-style-type: none;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    @media (max-width: 991px) {
      top: 32px;
      left: 28%;
    }
    li {
      background-color: transparent;
      width: 100%;
      padding: 4px 8px;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;
      font-size: 14px;
      font-weight: normal;
      &:hover {
        background-color: rgba(213, 238, 198, 1);
      }
    }
  }
  &:hover {
    ul {
      transform: scale(1);
    }
  }
`;
export const Lang = styled.div`
  margin-left: 4px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  svg {
    width: 8px;
  }
  @media (max-width: 991px) {
    margin-left: 0;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
  }
`;
