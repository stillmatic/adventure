import React from 'react';

const StoryChoices = ({ choices, onChoice }) => {
    return (
        <div>
            {choices.map((choice) => (
                <button key={choice.id} onClick={() => onChoice(choice.nextNodeId)}>
                    {choice.text}
                </button>
            ))}
        </div>
    );
};

export default StoryChoices;
