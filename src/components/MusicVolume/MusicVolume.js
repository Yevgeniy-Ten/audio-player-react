import React from 'react';
import "./MusicVolume.css"

const MusicVolume = ({volumeRef, volumeHandle}) => {
    return (
        <div className="Volume">
            <button className="MusicBtn VolumeBtn">
            </button>
            <div className="VolumeProgressWrap">
                <input onChange={volumeHandle} ref={volumeRef} type="range" min="0" max="1.0"
                       className="VolumeProgressLine"
                       step="0.05"/>
            </div>
        </div>
    )
}

export default MusicVolume;
