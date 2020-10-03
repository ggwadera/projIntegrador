import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import User from './User/User';
import CompanyProfile from './CompanyProfile/CompanyProfile';
import UserProfile from './UserProfile/UserProfile';

import './Profile.css';
// import useFetch from '../../Hooks/useFetch';
// import { GET_PROFILE } from '../../APIs/APIs';

const Profile = ({ type, id }) => {
  // const {data, loading, request} = useFetch();
  // const {url, options} = GET_PROFILE(type, id)

  const user = {
    imgSrc: `http://placekitten.com/300/300`,
    name: 'Rebeca Souza',
    title: 'Desenvolvedora Full-Stack',
  };

  const userData = {
    canEdit: true,
    city: 'São Paulo, SP',
    experience: '3 anos',
    desiredCity: 'São Paulo, SP',
    skills: [
      'Python',
      'Javascript',
      'Java',
      'C#',
      '.NET',
      'HTML5',
      'MySQL',
      'SAS',
      'C++',
      'Angular',
      'Java',
      'React',
    ],
    links: {
      github: 'https://github.com/rebecasouza',
      linkedin: 'https://linkedin.com/in/rebecasouza',
    },
    companies: [
      {
        name: 'Santander',
        position: 'Estagiária Front-End',
        acting: true,
        initialDate: '01/2019'
      },
      {
        name: 'Microsoft',
        position: 'Estagiária Back-End',
        acting: false,
        initialDate: '01/2018',
        finalDate: '12/2018'
      },
    ],
    courses: [{
      name: 'Ciência da Computação',
      institution: 'USP',
      conclusionYear: '12/2019'
    }]
  };

  // useEffect(() => {
  //   request(url, options)
  // }, [])

  return (
    <Container fluid className="container-profile p-0">
      <Container className="py-2 d-flex justify-content-between align-items-center">
        <i className="fas fa-bars" id="menu"></i>
        <img src="/logo192.png" alt="logo" id="logo" />
      </Container>
      <User imgSrc={user.imgSrc} name={user.name} title={user.title} />
      {type === 'company' ? (
        <CompanyProfile data={userData} />
      ) : (
        <UserProfile data={userData} />
      )}
    </Container>
  );
};

export default Profile;