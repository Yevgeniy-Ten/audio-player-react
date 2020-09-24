import React from 'react';
import "./MusicControls.css"

const MusicControls = ({togglePlay, isPlayed, switchNext, switchPrev}) => {
    const playBtnClasses = ["MusicBtn PlayBtn"]
    if (isPlayed) {
        playBtnClasses.push("stop")
    }
    return (
        <div className="MusicControls">
            <button onClick={switchPrev} className="MusicBtn PrevBtn"></button>
            <button onClick={togglePlay} className={playBtnClasses.join(" ")}></button>
            <button onClick={switchNext} className="MusicBtn NextBtn"></button>
        </div>
    )
}

export default MusicControls;
