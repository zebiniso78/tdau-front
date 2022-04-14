import styled from "styled-components";

export const MyDiv = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px 0;
`;
export const Alert = styled.div`
  width: 100%;
  min-height: 50px;
  border-radius: 4px;
  background-color: rgb(237 247 237);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 8px 16px;
  svg {
    color: var(--green);
    font-size: 20px;
    margin-left: 10px;
  }
  p {
    color: var(--green);
    font-size: 14px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button {
    border: none;
    background-color: transparent;
    outline: none;
    margin: 4px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      font-size: 16px;
      margin: 0;
      padding: 0;
      color: var(--grey);
      &:hover {
        color: var(--darkGreen);
      }
    }
    &:active {
      transform: translateY(1px);
    }
  }
`;
export const AlertDanger = styled.div`
  width: 100%;
  min-height: 50px;
  border-radius: 4px;
  background-color: rgb(255 244 229);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 8px 16px;
  svg {
    color: orange;
    font-size: 20px;
    margin-left: 10px;
  }
  p {
    color: #663c00;
    font-size: 12px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button {
    border: none;
    background-color: transparent;
    outline: none;
    margin: 4px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      color: var(--grey);
      margin: 0;
      padding: 0;
      font-size: 16px;
      &:hover {
        color: var(--black);
      }
    }
    &:active {
      transform: translateY(1px);
    }
  }
`;
export const Station = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  background-color: var(--white);
  /* min-height: 75px; */
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 4px;
  /* border: 0.516667px dashed #87898e; */
  /* border: 2px dashed #87898e; */
  border: 2px dashed #D0DAE8;
  transition: all 0.3s ease;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &:hover,
  &.asad {
    opacity: 0.9;
  }
`;
export const Info = styled.div`
  /* width: 88px;
  height: 56px; */
  width: 60%  !important;
  min-height: 100px;
  /* font-size: 6px; */
  font-size: 10px;
  text-align: center;
  color: var(--grey);
  & .file-upload-btn {
    min-height: 38px !important;
    margin: 15px;
    text-transform: capitalize !important;
    font-family: 'Inter', sans-serif !important;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #2E7DF6;

  }
  & p {
  font-family:'Inter', sans-serif;
  font-weight: 500;
  margin-top: 15px !important;
  color: #A9A9A9;
}
  @media (min-width: 991px) {
    font-size: 12px;
    width: 180px;
  }
`;
export const Icon = styled.div`
  /* width: 36px;
  height: 36px; */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--inpicon);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4px;

  svg {
    /* font-size: 9px; */
    font-size: 14px;
    color: var(--green);
  }
  @media (min-width: 991px) {
    margin-bottom: 8px;
  }
`;
export const Title = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #313131;
text-align: left;
`