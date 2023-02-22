import React from 'react';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: 20 }}>
      <h1 style={{ color: 'blue' }}>My Profile</h1>
      <img src={children} alt="Profile" />
      <p>Full Name: {fullName}</p>
      <p>Bio: {bio}</p>
      <p>Profession: {profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Joe Black',
  bio: 'Nothing',
  profession: 'Death',
};


export default Profile;
