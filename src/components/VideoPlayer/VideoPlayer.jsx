// import React, { useRef } from 'react';
import React, { useRef, useState } from 'react';
import css from './VideoPlayer.module.css';
import mute from '../../images/icons/mute.svg';
import muteX from '../../images/icons/muteX.svg';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className={css.videoPlayer}>
      <div className={css.playeerWrapper}>
        <video
          className={css.playeer}
          ref={videoRef}
          src="../../downloads/42318-431511222_tiny.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          controls
          style={{ width: '100%', height: 'auto' }}
        >
          Your browser does not support the video tag.
        </video>
        <button className={css.buttonMute} onClick={handleMuteToggle}>
          {isMuted ? (
            <img src={mute} alt="mute" />
          ) : (
            <img src={muteX} alt="mute" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
