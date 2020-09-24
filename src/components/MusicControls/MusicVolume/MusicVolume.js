import React from 'react';
import "../MusicControls.css"

const MusicVolume = () => {
    return (
        <div className="Volume">
            <button className="MusicBtn VolumeBtn">
            </button>
            <div className="VolumeProgressWrap">
                <input type="range" min="0" max="100" className="VolumeProgressLine" step="1"/>
            </div>
        </div>
    )
}

export default MusicVolume;
