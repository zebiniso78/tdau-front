import styled from 'styled-components';

export const WrapperMenu = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .toggleButton {
    display: none;
  }
  @media (max-width: 991px) {
    .toggleButton {
      display: block;

      position: absolute;
      top: 20px;
      right: 20px;
    }
    justify-content: flex-start;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: linear-gradient(85.38deg, #edede4 -23.38%, #f8f2eb 97.65%);
    z-index: 9999;
    padding: 20px;
    padding-top: 120px;
    transition: all 0.3s ease-in-out;
    transform: ${(props) =>
      props?.toggleNavbar ? 'translateX(0)' : 'translateX(200%)'};
  }
`;

export const NavbarItemList = styled.ul`
  min-width: 300px;
  position: absolute;
  top: 28px;
  right: -50%;
  background-color: #fff;
  padding: 8px 8px;
  margin: 0;
  list-style: none;
  border-radius: 6px;
  z-index: 999;
  transform: scale(0);
  transition: all 0.3s ease-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 14px;

  a {
    text-decoration: none;
    color: #142e38;
  }
  li {
    margin: 0;
    padding: 6px 10px;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: rgba(213, 238, 198, 1);
    }
  }

  @media (max-width: 991px) {
    top: 48px;
    right: 0;
  }
`;

export const NavbarItem = styled.div`
  margin: 0 12px;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
  &:hover ${NavbarItemList} {
    transform: scale(1);
  }

  @media (max-width: 991px) {
    margin: 12px;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;
export const NavbarItemMini = styled.div`
  position: relative;

  ul {
    margin: 0;
    padding: 0;
    border-radius: 6px;
    width: 300px;
    position: absolute;
    top: 24px;
    right: 0;
    z-index: 999;
    background-color: #fff;
    transition: all 0.3s ease;
    transform: scale(0);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 8px;
    font-weight: normal;

    @media (max-width: 991px) {
      top: 48px;
      right: auto;
      left: -20px;
      text-align: left;
    }
  }

  &:hover {
    ul {
      transform: scale(1);
    }
  }
`;
