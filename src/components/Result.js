import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">
            Είχατε {score} / 5 σωστές απαντήσεις!
        </div>
        <button className="playBtn" onClick={playAgain}>
            Παίξτε ξανά!
        </button>
    </div>
);

export default Result;