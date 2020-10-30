import React, {useEffect, useRef, useState} from 'react';
import "./MusicApp.css"
import Music from "../../components/Music/Music";
import {getRandomInt} from "../../assets/assets";


const MusicApp = () => {
    const audios = [{
        id: 0,
        path: "./musics/dunisco.mp3",
        title: "Dunisco - Heaven in the heartbreak",
    }, {
        id: 1,
        path: "./musics/RivalfeatBryanFinlayWalls.mp3",
        title: "Rival feat BryanFinlay - Walls",
    }, {
        id: 2,
        path: "./musics/ОкейТимаБелорусских.mp3",
        title: "Тима Белорусских - Окей",
    }]
    const [audio, setAudio] = useState({
        id: 0,
        path: "./musics/dunisco.mp3",
        title: "Dunisco - Heaven in the heartbreak",
    })
    const [isLoop, setIsLoop] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [isPlayed, setIsPlayed] = useState(false)
    const audioRef = useRef();
    const progressRef = useRef()
    const volumeRef = useRef();
    useEffect(() => {
        audioRef.current.ondurationchange = () => {
            setAudioTime(audioRef.current.duration)
        }
        audioRef.current.ontimeupdate = () => {
            progressBarUpdate()
        }
        // eslint-disable-next-line
    }, [audio])
    // Отображение времени
    const setAudioTime = (time) => {
        const audioCopy = {...audio}
        audioCopy.time = time
        setAudio(audioCopy)
    }
    // Прогресс бар
    const progressBarUpdate = () => {
        progressRef.current.value = audioRef.current.currentTime
    }
    const onProgressChange = () => {
        audioRef.current.currentTime = progressRef.current.value
    }
    // Включение выключение
    const onPlay = () => {
        if (isPlayed) {
            audioRef.current.pause()
            setIsPlayed(prev => !prev)
            return;
        }
        audioRef.current.play()
        setIsPlayed(prev => !prev)
    }
    // Громкость
    const volumeHandle = () => {
        audioRef.current.volume = volumeRef.current.value;
    }
    // Повтор трека задаёёт
    const onLoop = () => {
        if (isLoop) {
            // audioRef.current.loop = false;
            setIsLoop(false)
            return;
        }
        // audioRef.current.loop = true;
        setIsLoop(true)
    }
    const onShuffle = () => {
        setIsShuffle(!isShuffle)
    }
    // обработка звука


    // Предудыщий трек
    const onPrev = () => {
        let newAudioIndex = null;
        if (isShuffle) {
            while (true) {
                const randomI = getRandomInt(0, audios.length)
                if (randomI !== audio.id) {
                    newAudioIndex = randomI
                    break;
                }
            }
        } else {
            const isFirstAudio = audio.id === 0
            if (isFirstAudio) {
                const lastAudioIndex = audios[audios.length - 1].id
                newAudioIndex = lastAudioIndex
            } else {
                newAudioIndex = audio.id - 1
            }
        }
        const newAudio = audios[newAudioIndex]
        setAudio(newAudio)
        audioRef.current.src = newAudio.path
        if (isPlayed) {
            audioRef.current.play()
        }
    }
    // Следующий трек
    const onNext = () => {
        let newAudioIndex = null;
        if (isShuffle) {
            while (true) {
                const randomI = getRandomInt(0, audios.length)
                if (randomI !== audio.id) {
                    newAudioIndex = randomI
                    break;
                }
            }
        } else {
            const lastAudio = audios[audios.length - 1]
            const isLastAudio = audio.id === lastAudio.id
            if (isLastAudio) {
                newAudioIndex = 0
            } else {
                newAudioIndex = audio.id + 1
            }
        }
        const newAudio = audios[newAudioIndex]
        setAudio(newAudio)
        audioRef.current.src = newAudio.path
        if (isPlayed) {
            audioRef.current.play()
        }
    }

    return (
        <>
            <audio loop={isLoop}
                   ref={audioRef}
                   onEnded={onNext}>
                <source src={audio.path} type="audio/mp3"/>
            </audio>
            <div className="MusicApp">
                <Music onProgressChange={onProgressChange} onShuffle={onShuffle} onPrev={onPrev} onNext={onNext}
                       isShuffle={isShuffle} onLoop={onLoop}
                       isLoop={isLoop} isPlayed={isPlayed}
                       audio={audio} onPlay={onPlay}
                       volumeHandle={volumeHandle}
                       volumeRef={volumeRef}
                       progressRef={progressRef}/>
            </div>
        </>
    )
}
export default MusicApp;
