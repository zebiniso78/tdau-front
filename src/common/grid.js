import styled from 'styled-components';
export const Error = styled.div`
  color: #d2504d;
  font-size: 12px;
  margin-top: -2px;
  border-radius: 4px;
  padding: 2px 8px;
  &.select-error-tooltip {
    margin-top: 6px;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RowCenter = styled(Row)`
  align-items: center;
  justify-content: center;
`;

export const RowBetween = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
`;

export const Col12 = styled(Col)`
  flex: 0 0 100%;
  max-width: 100%;
`;

export const Col6 = styled(Col12)`
  flex: 0 0 100%;
  max-width: 100%;
  @media (min-width: 991px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
export const Col10 = styled.div`
  flex: 0 0 auto;
  width: 83.33333333%;
`;
export const Col8 = styled(Col12)`
  flex: 0 0 100%;
  max-width: 100%;
  @media (min-width: 991px) {
    flex: 0 0 66.6666666%;
    max-width: 66.6666666%;
  }
`;

export const Col4 = styled(Col12)`
  @media (min-width: 991px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  @media (min-width: 1400px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;

export const Col3 = styled(Col12)`
  @media (min-width: 991px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media (min-width: 1400px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
