import React from 'react';
import './Start.css';

const video = './images/Apresentação.mp4';

export default function Start() {
  return (
    <div className='video-container'>
      <video autoPlay loop className='video-bg'>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}
