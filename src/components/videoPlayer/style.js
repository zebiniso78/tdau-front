import styled from 'styled-components';

export const VideoPlayerProvider = styled.div`
  max-width: 1366px;
  margin-bottom: 60px;
  position: relative;
  @media (max-width: 991px) {
    height: 50vh !important;
    min-height: 50vh;
  }
  & > div {
    position: relative;
    z-index: 1;
    overflow: hidden;
    max-width: 100%;
    width: 100% !important;
    height: 90vh !important;
    max-height: 90vh;
    background-color: #213832;
    @media (max-width: 991px) {
      height: 50vh !important;
      min-height: 50vh;
    }
  }
`;
export const PlayerProvider = styled.div`
  max-width: 100%;
  @media (max-width: 991px) {
    height: 50vh !important;
    min-height: 50vh !important;
  }
  & > div {
    max-width: 100% !important;
    width: 100% !important;
    min-height: 100vh !important;
    @media (max-width: 991px) {
      height: 50vh !important;
      min-height: 50vh !important;
    }
  }
`;
