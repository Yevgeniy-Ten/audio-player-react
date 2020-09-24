import React from 'react';
import "./Music.css"

const Music = ({audioRef}) => {
    return (
        <div className="Music">
            <audio ref={audioRef}>
                <source src="./musics/dunisco_heaven_in_the_heartbreak.mp3" type="audio/mp3"/>
            </audio>
            <div className="MusicProgress">
                <input type="range" min="0" max="100" step="1" className="MusicProgressLine"/>
            </div>
        </div>
    )
}

export default Music;
