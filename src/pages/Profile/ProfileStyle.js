import styled from 'styled-components';

export const ProfileSection = styled.section`
  header {
    background-color: #1a3426;
    backdrop-filter: blur(16px);

    ul {
      a {
        svg {
          color: #fff;
        }
      }
    }
  }
`;

export const ProfileBody = styled.main`
  background-color: #e5e5e5;
  padding: 40px 0;

  .profile-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .user-card {
    width: 30%;
  }

  .inputs-card {
    width: 69%;
  }
`;
