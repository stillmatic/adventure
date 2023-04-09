import React from 'react';
import { Node } from '../types/Story';

interface StoryNodeProps {
    node: Node;
}

const StoryNode: React.FC<StoryNodeProps> = ({ node }) => {
    return (
        <div>
            <h1>{node.title}</h1>
            <p>{node.description}</p>
        </div>
    );
};

export default StoryNode;
