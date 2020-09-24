import React from 'react';
import "./Music.css"

const Music = ({audioRef, currentAudio, audioProgressRef, nextAudio, audioProgressHandle, audioTime, setAudioTime}) => {
    return (
        <div className="Music">
            <audio onTimeUpdate={() => audioProgressHandle(audioRef.current.currentTime)} onEnded={nextAudio}
                   onCanPlay={() => setAudioTime(audioRef.current.duration)} ref={audioRef}>
                <source src={currentAudio.path} type="audio/mp3"/>
            </audio>
            {audioTime}
            <div className="MusicProgress">
                <input ref={audioProgressRef}
                       onChange={audioProgressHandle} type="range" min="0"
                       max={currentAudio.time}
                       step="1"
                       className="MusicProgressLine"/>
            </div>
        </div>
    )
}

export default Music;
