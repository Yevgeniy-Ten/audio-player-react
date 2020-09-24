import React, {useRef, useState} from 'react';
import "./MusicApp.css"
import MusicControls from "../../components/MusicControls/MusicControls";
import Music from "../../components/Music/Music";
import MusicVolume from "../../components/MusicControls/MusicVolume/MusicVolume";

const MusicApp = () => {
    const [isPlayed, setIsPlayed] = useState(false)
    const audioRef = useRef();
    const togglePlay = () => {
        if (isPlayed) {
            audioRef.current.pause()
            setIsPlayed(prev => !prev)
        } else {
            audioRef.current.play()
            setIsPlayed(prev => !prev)
        }
    }
    return (
        <div className="MusicApp">
            <MusicControls togglePlay={togglePlay} isPlayed={isPlayed}/>
            <Music audioRef={audioRef}/>
            <MusicVolume/>
        </div>
    )
}

export default MusicApp;
