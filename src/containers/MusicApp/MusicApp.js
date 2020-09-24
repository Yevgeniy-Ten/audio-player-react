import React, {Component, useRef, useState} from 'react';
import "./MusicApp.css"
import MusicControls from "../../components/MusicControls/MusicControls";
import Music from "../../components/Music/Music";
import MusicVolume from "../../components/MusicControls/MusicVolume/MusicVolume";

class MusicApp extends Component {
    state = {
        currentMusic: {
            id: 1,
            path: "./musics/LittleKings-This-IsLife.mp3"
        },
        isPlayed: false,
        musics: [{
            id: 0,
            path: "./musics/dunisco_heaven_in_the_heartbreak.mp3"
        }, {id: 1, path: "./musics/LittleKings-This-IsLife.mp3"}]
    }

    audioRef = React.createRef()

    switchPrev() {
        if (this.state.currentMusic.id !== this.state.musics[0].id) {
            const prevAudioI = this.state.currentMusic.id - 1
            const newCurrAudio = this.state.musics[prevAudioI]
            this.setState({
                currentMusic: newCurrAudio,
            })
            this.audioRef.current.src = newCurrAudio.path;
            if (this.state.isPlayed) {
                this.audioRef.current.play()
            }
        }
    }

    switchNext() {
        if (this.state.currentMusic.id !== this.state.musics[this.state.musics.length - 1].id) {
            const nextAudioI = this.state.currentMusic.id + 1
            const newCurrAudio = this.state.musics[nextAudioI]
            this.setState({
                currentMusic: newCurrAudio,
            })
            this.audioRef.current.src = newCurrAudio.path;
            if (this.state.isPlayed) {
                this.audioRef.current.play()
            }
        }
    }

    togglePlay() {
        if (this.state.isPlayed) {
            this.audioRef.current.pause()
            this.setState({
                isPlayed: !this.state.isPlayed
            })
        } else {
            this.audioRef.current.play()
            this.setState({
                isPlayed: !this.state.isPlayed
            })
        }
    }

    render() {
        return (
            <div className="MusicApp">
                <MusicControls switchPrev={this.switchPrev.bind(this)} switchNext={this.switchNext.bind(this)}
                               togglePlay={this.togglePlay.bind(this)} isPlayed={this.state.isPlayed}/>
                <Music audioRef={this.audioRef} currentAudio={this.state.currentMusic}/>
                <MusicVolume/>
            </div>
        )
    }
}

export default MusicApp;
