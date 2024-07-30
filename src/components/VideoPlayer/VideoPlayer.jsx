import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import css from './VideoPlayer.module.css';
import mute from '../../images/icons/mute.svg';
import muteX from '../../images/icons/muteX.svg';

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleMuteToggle = () => {
    setIsMuted(prevState => !prevState);
  };

  return (
    <div className={css.videoPlayer}>
      <div className={css.playerWrapper}>
        <div className={css.border}>
          <ReactPlayer
            className={css.player}
            ref={playerRef}
            url="https://www.youtube.com/watch?v=wnhvanMdx4s"
            playing
            loop
            muted={isMuted}
            controls
            width="100%"
            height="100%"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
        <button className={css.buttonMute} onClick={handleMuteToggle}>
          {isMuted ? (
            <img src={mute} alt="mute" />
          ) : (
            <img src={muteX} alt="unmute" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
