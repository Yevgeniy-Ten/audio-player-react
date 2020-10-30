import React from "react";
import "./ProgressBar.css"

const ProgressBar = ({progressRef, audioLength, onProgressChange}) => {
    return (
        <div className="ProgressBar">
            <input ref={progressRef} type="range" min="0"
                   onChange={onProgressChange}
                   max={audioLength}
                   step="0.3"
                   className="ProgressBarLine"/>
        </div>)
}

export default ProgressBar