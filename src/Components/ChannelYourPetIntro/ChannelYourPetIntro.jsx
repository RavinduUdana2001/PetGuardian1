import React from 'react';
import './ChannelYourPetIntro.css';

function ChannelYourPetIntro() {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Channel Your Pet's Energy</h1>
      <p className="intro-description">
        Discover effective techniques to engage and train your pet, creating a happier and healthier life for them.
      </p>
      <div className="intro-image">
        <img 
          src="https://images.unsplash.com/photo-1582295101786-09e06e1a9b3f?fit=crop&w=500&h=300"
          alt="Pet Training"
          className="intro-img"
        />
      </div>
    </div>
  );
}

export default ChannelYourPetIntro;
