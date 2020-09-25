import React from 'react';
import "./Music.css"
import MusicProgress from "../MusicControls/MusicProgress/MusicProgress";

const Music = ({audioRef, currentAudio, audioProgressRef, nextAudio, currentTimeUpdater,setCurrentTime}) => {
    return (
        <div className="Music">
            <audio onTimeUpdate={() => currentTimeUpdater()} onEnded={nextAudio}
                   ref={audioRef}>
                <source src={currentAudio.path} type="audio/mp3"/>
            </audio>
            <div className="MusicInfoWrap">
                <div className="MusicInfo">
                    <span className="MusicAuthor">{currentAudio.info.author}</span>
                    <span className="MusicName">{currentAudio.info.name}</span>
                </div>
                <div className="MusicInfo">
                    <span className="MusicTime">{currentAudio.timeIn.minutes}</span>
                </div>
            </div>
            <MusicProgress audioProgressRef={audioProgressRef}
                           currentAudioTime={currentAudio.timeIn.seconds}
                           setCurrentTime={setCurrentTime}/>
        </div>
    )
}

export default Music;
