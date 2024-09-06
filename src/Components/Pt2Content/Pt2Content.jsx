import React from 'react';
import './Pt2Content.css';

function Pt2Content() {
  return (
    <div className='content-container text-center mb-5' style={{ marginBottom: '100px' }}>
      <h1 className='content-title'>Discover the Best in Dog Training</h1>
      <p className='content-description'>
        Unlock your dog's potential with our expert training programs. Whether you're looking to correct behavioral issues or enhance skills, our tailored training methods ensure effective and enjoyable learning experiences for both you and your furry friend. Watch our introduction video to see how we make a difference.
      </p>
      <div className='video-section'>
        <iframe
          className='video-frame'
          src='https://www.youtube.com/embed/1oDGa2yPb2g'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Pt2Content;
