import React from 'react';
import "./MusicControls.css"

const MusicControls = ({togglePlay, isPlayed, nextAudio, prevAudio, toggleLoop, isLooped}) => {
    const playBtnClasses = ["MusicBtn", "PlayBtn"]
    if (isPlayed) {
        playBtnClasses.push("stop")
    }
    const loopBtnClasses = ["MusicBtn", "LoopBtn"]
    if (isLooped) {
        loopBtnClasses.push("Looped")
    }
    return (
        <div className="MusicControls">
            <button onClick={prevAudio} className="MusicBtn PrevBtn"></button>
            <button onClick={togglePlay} className={playBtnClasses.join(" ")}></button>
            <button onClick={nextAudio} className="MusicBtn NextBtn"></button>
            <button onClick={toggleLoop} className={loopBtnClasses.join(" ")}></button>
            <button onClick={nextAudio} className="MusicBtn ShuffleBtn"></button>
        </div>
    )
}

export default MusicControls;
