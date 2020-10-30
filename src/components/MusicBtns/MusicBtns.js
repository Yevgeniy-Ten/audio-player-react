import React from 'react';
import "./MusicBtns.css"

const MusicBtns = ({onPlay, isPlayed, onLoop, isLoop, isShuffle, onShuffle, audioPath, onNext, onPrev}) => {
    const playBtnCls = ["MusicBtn", "PlayBtn"]
    if (isPlayed) {
        playBtnCls.push("stop")
    }
    const loopBtnCls = ["MusicBtn", "LoopBtn"]
    if (isLoop) {
        loopBtnCls.push("active")
    }
    const shuffleBtnCls = ["MusicBtn", "ShuffleBtn"]
    if (isShuffle) {
        shuffleBtnCls.push("active")
    }
    return (
        <div className="MusicControls flex-center">
            <button onClick={onPrev} className="MusicBtn PrevBtn"/>
            <button onClick={onPlay} className={playBtnCls.join(" ")}/>
            <button onClick={onNext} className="MusicBtn NextBtn"/>
            <button onClick={onLoop} className={loopBtnCls.join(" ")}/>
            <button onClick={onShuffle} className={shuffleBtnCls.join(" ")}/>
            <a title="скачать" href={audioPath} download className="MusicBtn DownloadBtn"/>
        </div>
    )
}

export default MusicBtns;
