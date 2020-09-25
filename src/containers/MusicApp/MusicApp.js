import React, {useEffect, useRef, useState} from 'react';
import "./MusicApp.css"
import MusicControls from "../../components/MusicControls/MusicControls";
import Music from "../../components/Music/Music";
import MusicVolume from "../../components/MusicControls/MusicVolume/MusicVolume";

const secondsInMinutes = (time) => {
    return (time / 60).toFixed(2)
}
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const MusicApp = () => {
    const [currentAudio, setCurrentAudio] = useState({
        id: 1,
        path: "./musics/RivalfeatBryanFinlayWalls.mp3",
        info: {
            author: "Rival feat BryanFinlay",
            name: "Walls"
        },
        timeIn: {
            seconds: 0,
            minutes: 0,
        },
        currentTime: 0,
        audioProgress: 0,
    })
    const [audios, setAudios] = useState([{
        id: 0,
        path: "./musics/dunisco_heaven_in_the_heartbreak.mp3",
        info: {
            author: "Dunisco",
            name: "Heaven in the heartbreak"
        },
    }, {
        id: 1,
        path: "./musics/RivalfeatBryanFinlayWalls.mp3",
        info: {
            author: "Rival feat BryanFinlay",
            name: "Walls"
        },
    }, {
        id: 2,
        path: "./musics/ОкейТимаБелорусских.mp3",
        info: {
            author: "Тима белорууских",
            name: "Окей"
        },
    }
    ])
    const [isLoop, setIsLoop] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [isPlayed, setIsPlayed] = useState(false)
    const audioRef = useRef();
    const audioProgressRef = useRef();
    const volumeProgressRef = useRef();
    useEffect(() => {
        // следим чтобы устанавливать привычное отображение трека
        audioRef.current.oncanplay = function () {
            setCurrentAudio({
                ...currentAudio,
                timeIn: {
                    ...currentAudio.timeIn,
                    seconds: audioRef.current.duration,
                    minutes: secondsInMinutes(audioRef.current.duration),
                },
                currentTime: 0,
            })
        }
    }, [currentAudio.path])
    // установка нового значения ползунка
    useEffect(() => {
        audioProgressRef.current.value = currentAudio.currentTime;
    }, [currentAudio.currentTime])
    const audioHandler = (audio) => {
        return {
            ...audio,
            timeIn: {
                seconds: 0,
                minutes: 0,
            },
            currentTime: 0,
            audioProgress: 0,
        }
    }
    // обработка звука
    const volumeProgressHandle = () => {
        audioRef.current.volume = volumeProgressRef.current.value;
    }
    // обработка прогресса музыки
    const currentTimeUpdater = () => {
        setCurrentAudio((prev) => {
            return {
                ...prev,
                currentTime: audioRef.current.currentTime,
                audioProgress: audioProgressRef.current.value,
            }
        })
    }
    const setCurrentTime = () => {
        if (currentAudio.audioProgress !== audioProgressRef.current.value) {
            setCurrentAudio((prev) => {
                return {
                    ...prev,
                    currentTime: audioProgressRef.current.value,
                    audioProgress: audioProgressRef.current.value,
                }
            })
        }
    }
    const prevAudio = () => {
        if (isShuffle) {
            let newAudioI = null;
            while (true) {
                const newI = getRandomInt(0, audios.length)
                if (newI !== currentAudio.id) {
                    newAudioI = newI;
                    break;
                }
            }
            const newCurrAudio = audios[newAudioI]
            setCurrentAudio(audioHandler(newCurrAudio))
            audioRef.current.src = newCurrAudio.path;
            if (isPlayed) {
                audioRef.current.play()
            }
        } else if (currentAudio.id !== audios[0].id) {
            const prevAudioI = currentAudio.id - 1
            const newCurrAudio = audios[prevAudioI]
            setCurrentAudio(audioHandler(newCurrAudio))
            audioRef.current.src = newCurrAudio.path;
            if (isPlayed) {
                audioRef.current.play()
            }
        }
    }
    const nextAudio = () => {
        if (isShuffle) {
            let newAudioI = null;
            while (true) {
                const newI = getRandomInt(0, audios.length)
                if (newI !== currentAudio.id) {
                    newAudioI = newI;
                    break;
                }
            }
            const newCurrAudio = audios[newAudioI]
            setCurrentAudio(audioHandler(newCurrAudio))
            audioRef.current.src = newCurrAudio.path;
            if (isPlayed) {
                audioRef.current.play()
            }
        } else if (currentAudio.id !== audios[audios.length - 1].id) {
            const nextAudioI = currentAudio.id + 1
            const newCurrAudio = audios[nextAudioI]
            setCurrentAudio(audioHandler(newCurrAudio))
            audioRef.current.src = newCurrAudio.path;
            if (isPlayed) {
                audioRef.current.play()
            }
        } else if (isPlayed) {
            audioRef.current.pause()
            setIsPlayed(prev => !prev)
        }
    }
    const toggleShuffle = () => {
        setIsShuffle(prev => !prev)
    }
    const toggleLoop = () => {
        if (isLoop) {
            audioRef.current.loop = false;
            setIsLoop(prev => !prev)
        } else {
            audioRef.current.loop = true;
            setIsLoop(prev => !prev)
        }
    }
    const togglePlay = () => {
        if (isPlayed) {
            audioRef.current.pause()
            setIsPlayed(prev => !prev)
        } else {
            audioRef.current.currentTime = currentAudio.currentTime
            audioRef.current.play()
            setIsPlayed(prev => !prev)
        }
    }
    return (
        <div className="MusicApp">
            <MusicControls prevAudio={prevAudio} nextAudio={nextAudio}
                           togglePlay={togglePlay} isPlayed={isPlayed}
                           toggleLoop={toggleLoop} isLooped={isLoop}
                           isShuffle={isShuffle} toggleShuffle={toggleShuffle}
                           audioPath={currentAudio.path}/>
            <Music nextAudio={nextAudio}
                   currentTimeUpdater={currentTimeUpdater}
                   audioProgressRef={audioProgressRef}
                   audioRef={audioRef}
                   currentAudio={currentAudio}
                   setCurrentTime={setCurrentTime}
            />
            <MusicVolume volumeProgressRef={volumeProgressRef} volumeProgressHandle={volumeProgressHandle}/>
        </div>
    )
}
export default MusicApp;
