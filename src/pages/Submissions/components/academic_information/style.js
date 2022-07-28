import styled from 'styled-components';

export const AcademicInfoProvider = styled.div`
  padding: 15px;
  font-family: 'Open Sans', sans-serif;
`;
export const AcademicInfoTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  color: #010e31;
  margin-bottom: 15px;
`;
export const AcademicInfo = styled.div`
  & p {
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
`;
export const AcademicForm = styled.form`
  font-family: 'Inter', sans-serif;
  .select-error > div {
    border: 1px solid #d2504d;
  }
`;
