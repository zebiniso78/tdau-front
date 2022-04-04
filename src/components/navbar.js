import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

export const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavItem>
          {props.title} <FiChevronDown />
        </NavItem>
      </Nav>
    </>
  );
};

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled(Link)`
  border: 1px solid red;
`;
