import React from 'react';
import "./MusicApp.css"
import MusicControls from "../../components/MusicControls/MusicControls";
import Music from "../../components/Music/Music";
import MusicVolume from "../../components/MusicControls/MusicVolume/MusicVolume";

const MusicApp = () => {
    return (
        <div className="MusicApp">
            <MusicControls/>
            <Music/>
            <MusicVolume/>
        </div>
    )
}

export default MusicApp;
