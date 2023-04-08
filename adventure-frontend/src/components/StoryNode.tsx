import React from 'react';

const StoryNode = ({ node }) => {
    return (
        <div>
            <h1>{node.title}</h1>
            <p>{node.text}</p>
        </div>
    );
};

export default StoryNode;
