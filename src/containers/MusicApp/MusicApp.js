import React, {useMemo, useRef, useState} from 'react';
import "./MusicApp.css"
import MusicControls from "../../components/MusicControls/MusicControls";
import Music from "../../components/Music/Music";
import MusicVolume from "../../components/MusicControls/MusicVolume/MusicVolume";

const secondsInMinutes = (time) => {
    return (time / 60).toFixed(2)
}
const MusicApp = () => {
    const [currentAudio, setCurrentAudio] = useState({
        id: 1,
        path: "./musics/LittleKings-This-IsLife.mp3",
        time: 0,
    })
    const [audios, setAudios] = useState([{
        id: 0,
        path: "./musics/dunisco_heaven_in_the_heartbreak.mp3"
    }, {id: 1, path: "./musics/LittleKings-This-IsLife.mp3"}])
    const [isPlayed, setIsPlayed] = useState(false)
    const audioRef = useRef();
    const audioProgressRef = useRef();
    const audioProgressHandle = (time) => {
        audioProgressRef.current.value = time;
    }
    const setAudioTime = (time) => {
        setCurrentAudio({
            ...currentAudio,
            time: time,
        })
    }
    const audioTimeInMinutes = useMemo(() => {
        return secondsInMinutes(currentAudio.time)
    }, [currentAudio.time])
    const prevAudio = () => {
        if (currentAudio.id !== audios[0].id) {
            const prevAudioI = currentAudio.id - 1
            const newCurrAudio = audios[prevAudioI]
            setCurrentAudio(newCurrAudio)
            audioRef.current.src = newCurrAudio.path;
            if (isPlayed) {
                audioRef.current.play()
            }
        }
    }
    const nextAudio = () => {
        if (currentAudio.id !== audios[audios.length - 1].id) {
            const nextAudioI = currentAudio.id + 1
            const newCurrAudio = audios[nextAudioI]
            setCurrentAudio(newCurrAudio)
            audioRef.current.src = newCurrAudio.path;
            if (isPlayed) {
                audioRef.current.play()
            }
        } else if (isPlayed) {
            audioRef.current.pause()
        }
    }
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
            <MusicControls prevAudio={prevAudio} nextAudio={nextAudio}
                           togglePlay={togglePlay} isPlayed={isPlayed}/>
            <Music nextAudio={nextAudio}
                   audioProgressHandle={audioProgressHandle}
                   audioProgressRef={audioProgressRef}
                   audioRef={audioRef}
                   currentAudio={currentAudio}
                   setAudioTime={setAudioTime}
                   audioTime={audioTimeInMinutes}/>
            <MusicVolume/>
        </div>
    )
}
export default MusicApp;
