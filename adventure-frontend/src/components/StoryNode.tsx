import React from 'react';
import { Node } from '../types/Story';
import { Heading } from '@chakra-ui/react';

interface StoryNodeProps {
    node: Node;
}

const StoryNode: React.FC<StoryNodeProps> = ({ node }) => {
    return (
        <div>
            <Heading>{node.title}</Heading>
            <p>{node.description}</p>
        </div>
    );
};

export default StoryNode;
