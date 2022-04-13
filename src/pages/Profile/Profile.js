import React from 'react';
//import Navbar from '../../components/MainPage/Navbar/Navbar';
//import Footer from '../../components/MainPage/Footer/Footer';
import { ProfileSection, ProfileBody } from './ProfileStyle';
import PersonalCard from '../../components/PersonalCard';
import InputsCard from '../../components/InputsCard';
import { Container } from '../../common/grid';

function Profile() {
  return (
    <>
      <ProfileSection>
        <ProfileBody>
          <Container className="profile-container">
            <div className="user-card">
              <PersonalCard title="Абдурахимов Абдувохид Абдумалик ўғли" />
            </div>
            <div className="inputs-card">
              <InputsCard title="Личная информация" />
            </div>
          </Container>
        </ProfileBody>
      </ProfileSection>
    </>
  );
}

export default Profile;
