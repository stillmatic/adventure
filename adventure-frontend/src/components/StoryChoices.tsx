import React from 'react';
import { Choice, Story } from '../types/Story';

interface StoryChoicesProps {
    story: Story;
    choices: Choice[];
    onChoice: (nextNodeId: string) => void;
}

const StoryChoices: React.FC<StoryChoicesProps> = ({ story, choices, onChoice }) => {
    return (
        <div>
            {choices.map((choice) => {
                const choiceNode = story.tree.find((node) => node.id === choice.id);
                return (
                    <button key={choice.id} onClick={() => onChoice(choice.id)}>
                        {choiceNode.title}
                    </button>
                );
            })}
        </div>
    );
};

export default StoryChoices;
