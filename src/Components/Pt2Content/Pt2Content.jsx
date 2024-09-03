import React from 'react';
import './Pt2Content.css';

function Pt2Content() {
  return (
    <div className='content-container text-center mb-5' style={{marginBottom:'100px'}}>
      <h1 className='content-title'>Explore dog training like never before.</h1>
      <p className='content-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur doloremque accusamus consectetur omnis perferendis doloribus est quisquam harum nostrum, quasi totam nobis similique aliquid magnam! Porro dolores natus cumque.
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
