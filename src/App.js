import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="MusicApp">
                <div className="MusicControls">
                    <button className="MusicBtn PrevBtn"></button>
                    <button className="MusicBtn PlayBtn"></button>
                    <button className="MusicBtn NextBtn"></button>
                </div>
                <div className="Music">
                    <audio>
                        <source src="./musics/dunisco_heaven_in_the_heartbreak.mp3" type="audio/mp3"/>
                    </audio>
                    <div className="MusicProgress">
                        <input type="range" min="0" max="100" step="1" className="MusicProgressLine"/>
                    </div>
                </div>
                <div className="Volume">
                    <button className="MusicBtn VolumeBtn">
                    </button>
                    <div className="VolumeProgressWrap">
                        <input type="range" min="0" max="100" className="VolumeProgressLine" step="1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
