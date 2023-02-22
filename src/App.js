import React from 'react';
import profileImage from './assets/4d7edddc07bd69064cc9c2cf6ae65945453cb94066452ce27c4b4c4e3b064d8b._V_SX1080_.jpeg';
import Profile from './Profile/profile';

function App() {
  const handleName = (name) => {
    alert(`My name is ${name}`);
  };

  return (
    <div>
      <Profile fullName="Joe Black" bio="Nothing" profession="Death" handleName={handleName}>
        <img src={profileImage} alt="Profile" />
      </Profile>
    </div>
  );
}

export default App;
