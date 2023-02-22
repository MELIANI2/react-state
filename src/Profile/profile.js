
import React from 'react';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: 20 }}>
      <h1 style={{ color: 'blue' }}>My Profile</h1>
      <img src={children} alt="Profile" style={{ width: 200, height: 200, borderRadius: 100 }} />
      <p style={{ color: 'green', fontSize: 20 }}>Full Name: {fullName}</p>
      <p style={{ color: 'green', fontSize: 20 }}>Bio: {bio}</p>
      <p style={{ color: 'green', fontSize: 20 }}>Profession: {profession}</p>
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
