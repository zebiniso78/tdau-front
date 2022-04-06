import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <>
      {props.href ? (
        <BtnLink
          to={props.link}
          style={{ backgroundColor: props.bgColor, color: props.color }}
        >
          {props.title}
        </BtnLink>
      ) : (
        <Btn
          type={props.type}
          onClick={props.onClick}
          style={{ backgroundColor: props.bgColor, color: props.color }}
          disabled={props.disabled}
        >
          {props.title}
        </Btn>
      )}
    </>
  );
};

const Btn = styled.button`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 90px;
  margin: 2px 0;
  border: none;
  border-radius: 4px;
  background-color: #169622;
  color: #fff;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  text-align: center !important;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #169619;
  }
  &:active {
    transform: translateY(1px);
    transition: all 0.1s ease;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const BtnLink = styled.a`
  padding: 10px 110px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  align-items: center;
  border-radius: 4px;
  color: #2e7df6;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: translateY(1px);
    transition: all 0.1s ease;
  }
  &:disabled {
    opacity: 0.5;
  }
`;
export default Button;
