import React from 'react';
import "./MusicControls.css"

const MusicControls = ({togglePlay, isPlayed, nextAudio, prevAudio}) => {
    const playBtnClasses = ["MusicBtn PlayBtn"]
    if (isPlayed) {
        playBtnClasses.push("stop")
    }
    return (
        <div className="MusicControls">
            <button onClick={prevAudio} className="MusicBtn PrevBtn"></button>
            <button onClick={togglePlay} className={playBtnClasses.join(" ")}></button>
            <button onClick={nextAudio} className="MusicBtn NextBtn"></button>
        </div>
    )
}

export default MusicControls;
