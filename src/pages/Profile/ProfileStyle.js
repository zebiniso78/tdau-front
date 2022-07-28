import styled from 'styled-components';
export const ProfilePaper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 24px;
  padding-bottom: 120px;
  border-radius: 12px;
`;
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
