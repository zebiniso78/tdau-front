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
      ) : props.type === 'tel' ? (
        <Label>
          <TitleWrapper>
            {props.title}
            {props.required === true ? <sup>*</sup> : null}
          </TitleWrapper>
          <InputText
            type={`tel`}
            required
            onChange={props.onChange}
            maxLength={props.length}
          ></InputText>
        </Label>
      ) : props.type === 'select' ? (
        <Label>
          <TitleWrapper>
            {props.title}
            {props.required === true ? <sup>*</sup> : null}
          </TitleWrapper>
          <select required>
            <option value={props.value}>{props.option}</option>
          </select>
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
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  align-items: left;
  sup {
    padding: 0;
    margin: 0;
    color: red;
    font-size: 18px;
    margin-left: 4px;
  }

  select {
    width: 100%;
    background-color: #fff;
    border: 1px solid #bcc6d4;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    margin: 0;
    padding: 0;
    padding: 8px 12px;
    margin-bottom: 6px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: #313131;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 28px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #313131;
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
  width: 100%;
  background-color: #fff;
  border: 1px solid #bcc6d4;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  margin: 0;
  padding: 0;
  padding: 8px 12px;
  margin-bottom: 6px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #313131;

  &:focus {
    border: 1px solid #2e7df6;
  }

  &:invalid {
    border: 1px solid #eb5757;
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
