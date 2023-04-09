import React from 'react';
import { Choice, Story } from '../types/Story';
import { Button, Flex, Spacer, Stack } from '@chakra-ui/react';

interface StoryChoicesProps {
    story: Story;
    choices: Choice[];
    onChoice: (nextNodeId: string) => void;
}

const StoryChoices: React.FC<StoryChoicesProps> = ({ story, choices, onChoice }) => {
    return (
        <div>
            <Stack
                direction="row"
                p={8}
            >
                {choices.map((choice) => {
                    const choiceNode = story.tree.find((node) => node.id === choice.id);
                    return (
                        <>
                            <Button key={choice.id} onClick={() => onChoice(choice.id)}>
                                {choiceNode?.title}
                            </Button>
                        </>

                    );
                })}
            </Stack>
        </div>
    );
};

export default StoryChoices;
