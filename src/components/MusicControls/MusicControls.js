import React from 'react';
import "./MusicControls.css"

const MusicControls = ({togglePlay, isPlayed}) => {
    const playBtnClasses = ["MusicBtn PlayBtn"]
    if (isPlayed) {
        playBtnClasses.push("stop")
    }
    return (
        <div className="MusicControls">
            <button className="MusicBtn PrevBtn"></button>
            <button onClick={togglePlay} className={playBtnClasses.join(" ")}></button>
            <button className="MusicBtn NextBtn"></button>
        </div>
    )
}

export default MusicControls;
