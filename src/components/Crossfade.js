/* import React from 'react'
import BannerVid from '../image/Homebanner.mp4';
import './CrossfadeVid';

function Crossfade() {

  return (
    <div className='parent-container'>

      <video id="video" autoPlay loop muted playsInline className='videobanner'>
        <source src={BannerVid} type='video/mp4' />
      </video>
      <div className='homecover'>
        <h2>Immerse in the<br/>INDIAN CULTURE</h2>
      </div>
   
      
      <div className="play-pause-btn" data-click="0">Pause</div>

    </div>
  )
}

export default Crossfade
 */
// 
// 
// 
// 
// 
// Import the Play and Pause components from the react-feather library
import {React, useState} from 'react'
import BannerVid from '../image/Homebanner.mp4';

import { Play, Pause } from 'react-feather';

function Crossfade() {
  // State to track whether the video is currently playing or paused
  const [isPlaying, setIsPlaying] = useState(true);

  // Function to toggle play/pause when the button is clicked
  const handleTogglePlay = () => {
    const video = document.getElementById('video');

    // If the video is paused, play it and update the state
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      // If the video is playing, pause it and update the state
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='parent-container'>
      {/* Video element */}
      <video id="video" autoPlay loop muted playsInline className='videobanner'>
        <source src={BannerVid} type='video/mp4' />
      </video>
      
      {/* Text overlay */}
      <div className='homecover'>
        <h2>Immerse in the<br/>INDIAN CULTURE</h2>
      </div>
      
      {/* Play/Pause Button */}
      {isPlaying ? (
        // If the video is playing, show the Pause button
        <div className="play-pause-btn" onClick={handleTogglePlay}>
          {/* <Pause className='backtoprevious' color='#ffffff' size={45} /> */}
          <Pause className='pause-btn' color='#ffffff' size={45} />
        </div>
      ) : (
        // If the video is paused, show the Play button
        <div className="play-pause-btn" onClick={handleTogglePlay}>
          <Play className='play-btn' color='#ffffff' size={45} />
        </div>
      )}
    </div>
  );
}

export default Crossfade;
