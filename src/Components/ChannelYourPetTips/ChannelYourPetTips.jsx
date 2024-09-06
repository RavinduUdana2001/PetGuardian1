import React from 'react';
import './ChannelYourPetTips.css';

function ChannelYourPetTips() {
  return (
    <div className="tips-container">
      <h2 className="tips-title">Expert Tips for Channeling Your Pet’s Energy</h2>
      <p className="tips-description">
        Transform your pet’s energy into positive activities with these expert tips. Create a joyful and balanced environment for your furry friend.
      </p>
      <div className="tips-cards">
        <div className="tips-card">
          <h3 className="card-title">Interactive Playtime</h3>
          <p className="card-description">
            Use interactive toys to keep your pet engaged and active.
          </p>
        </div>
        <div className="tips-card">
          <h3 className="card-title">Structured Training</h3>
          <p className="card-description">
            Regular training sessions help build routines and positive habits.
          </p>
        </div>
        <div className="tips-card">
          <h3 className="card-title">Mental Stimulation</h3>
          <p className="card-description">
            Puzzles and challenges keep your pet's mind sharp and entertained.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChannelYourPetTips;
