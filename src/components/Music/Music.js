import React from 'react';
import "./Music.css"

const Music = ({audioRef, currentAudio}) => {
    return (
        <div className="Music">
            <audio ref={audioRef}>
                <source src={currentAudio.path} type="audio/mp3"/>
            </audio>
            <div className="MusicProgress">
                {currentAudio.path}
                <input type="range" min="0" max="100" step="1" className="MusicProgressLine"/>
            </div>
        </div>
    )
}

export default Music;
