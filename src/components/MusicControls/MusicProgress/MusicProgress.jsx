import React from "react";
import "./MusicProgress.css"

const MusicProgress = ({audioProgressRef, setCurrentTime, currentAudioTime}) => {
    return (
        <div className="MusicProgress">
            <input ref={audioProgressRef}
                   onClick={setCurrentTime}
                   type="range" min="0"
                   max={currentAudioTime}
                   step="0.3"
                   className="MusicProgressLine"/>
        </div>)
}

export default MusicProgress