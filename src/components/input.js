import styled from 'styled-components';
import React from 'react';

const Input = (props) => {
  return (
    <>
      {props.type === 'text' ? (
        <Label>
          <TitleWrapper>
            {props.title}
            {props.required === true ? <sup>*</sup> : null}
          </TitleWrapper>

          <InputText
            type={`text`}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            required
            maxLength={props.length}
          ></InputText>
        </Label>
      ) : props.type === 'email' ? (
        <Label>
          <TitleWrapper>
            {props.title}
            {props.required === true ? <sup>*</sup> : null}
          </TitleWrapper>
          <InputText
            type={`email`}
            placeholder={props.placeholder}
            required
            value={props.value}
            onChange={props.onChange}
            maxLength={props.length}
          ></InputText>
        </Label>
      ) : props.type === 'password' ? (
        <Label>
          <TitleWrapper>
            {props.title}
            {props.required === true ? <sup>*</sup> : null}
          </TitleWrapper>
          <InputText
            type={`password`}
            required
            onChange={props.onChange}
            maxLength={props.length}
          ></InputText>
        </Label>
      ) : (
        <Label>
          <TitleWrapper>
            {props.title}
            {props.required === true ? <sup>*</sup> : null}
          </TitleWrapper>
          <InputText
            type={`date`}
            placeholder={props.placeholder}
            required
            value={props.value}
            onChange={props.onChange}
            maxLength={props.length}
          ></InputText>
        </Label>
      )}
    </>
  );
};

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  sup {
    padding: 0;
    margin: 0;
    color: red;
    font-size: 18px;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 96%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 28px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 94%;
    justify-content: flex-start;

    margin-bottom: 4px;
  }
`;

const InputText = styled.input`
  width: 60%;
  background: #fcfcfd;
  border: 1px solid #cfd0d7;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  margin: 0;
  padding: 0;
  padding: 12px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: var(--black);

  &:focus {
    border: 1px solid var(--green);
  }

  &:disabled {
    color: var(--grey);
  }
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const InputTel = styled(InputText)`
  input:invalid {
    border: 1px solid red;
  }
`;

export default Input;
