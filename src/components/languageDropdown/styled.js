import styled from 'styled-components';
export const DropdownElement = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;

  ul {
    transform: scale(0);
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(250px);
    backdrop-filter: blur(250px);
    border-radius: 12px;
    box-shadow: 0px 10px 25px #dfd9ce;
    padding: 0 4px;
    text-align: left;
    margin: 0;
    list-style-type: none;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    @media (max-width: 768px) {
      top: 36px;
      left: -16px;
    }
    li {
      background-color: transparent;
      width: 100%;
      padding: 4px 16px;
      margin: 4px 0;
      border-radius: 6px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #fff;
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
  width: 90px;
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
