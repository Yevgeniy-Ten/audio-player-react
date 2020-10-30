import React from 'react';
import "./Music.css"
import MusicBtns from "../MusicBtns/MusicBtns";
import MusicVolume from "../MusicVolume/MusicVolume";
import ProgressBar from "../ProgressBar/ProgressBar";
import {secondsInMinute} from "../../assets/assets";

const Music = ({volumeRef, volumeHandle, progressRef, audio, onPlay, isPlayed, onLoop, isLoop, isShuffle, onShuffle, onNext, onPrev, onProgressChange}) => (
    <div className="Music flex-center">
        <MusicBtns audioPath={audio.path} onNext={onNext} onPrev={onPrev} onPlay={onPlay} isPlayed={isPlayed}
                   onShuffle={onShuffle}
                   isShuffle={isShuffle} onLoop={onLoop}
                   isLoop={isLoop}/>
        <div className="MusicProgress">
            <div className="MusicInfo flex-center">
                <p>{audio.title || "Audio"}</p>
                <small>{secondsInMinute(audio.time).toFixed(2) || "00:00"}</small>
            </div>
            <ProgressBar onProgressChange={onProgressChange}
                         audioLength={audio.time} progressRef={progressRef}/>
        </div>
        <MusicVolume volumeHandle={volumeHandle} volumeRef={volumeRef}/>
    </div>
)

export default Music;
