import React from 'react';

interface GameOverProps {
    onStartOver: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ onStartOver }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <p>There are no more options. Do you want to start over?</p>
            <button onClick={onStartOver}>Start Over</button>
        </div>
    );
};

export default GameOver;
