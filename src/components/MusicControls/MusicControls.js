import React from 'react';
import "./MusicControls.css"
import MusicVolume from "./MusicVolume/MusicVolume";

const MusicControls = () => {
    return (
        <div className="MusicControls">
            <button className="MusicBtn PrevBtn"></button>
            <button className="MusicBtn PlayBtn"></button>
            <button className="MusicBtn NextBtn"></button>
        </div>
    )
}

export default MusicControls;
