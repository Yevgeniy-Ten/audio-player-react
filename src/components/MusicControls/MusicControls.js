import React from 'react';
import "./MusicControls.css"

const MusicControls = ({togglePlay, isPlayed, nextAudio, prevAudio, toggleLoop, isLooped, toggleShuffle, isShuffle,audioPath}) => {
    const playBtnClasses = ["MusicBtn", "PlayBtn"]
    if (isPlayed) {
        playBtnClasses.push("stop")
    }
    const loopBtnClasses = ["MusicBtn", "LoopBtn"]
    if (isLooped) {
        loopBtnClasses.push("BtnActive")
    }
    const shuffleBtnClasses = ["MusicBtn", "ShuffleBtn"]
    if (isShuffle) {
        shuffleBtnClasses.push("BtnActive")
    }
    return (
        <div className="MusicControls">
            <button onClick={prevAudio} className="MusicBtn PrevBtn"></button>
            <button onClick={togglePlay} className={playBtnClasses.join(" ")}></button>
            <button onClick={nextAudio} className="MusicBtn NextBtn"></button>
            <button onClick={toggleLoop} className={loopBtnClasses.join(" ")}></button>
            <button onClick={toggleShuffle} className={shuffleBtnClasses.join(" ")}></button>
            <a title="скачать" href={audioPath} download className="MusicBtn DownloadBtn"></a>
        </div>
    )
}

export default MusicControls;
