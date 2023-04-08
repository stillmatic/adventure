import { useEffect, useState } from 'react';
import StoryNode from '../components/StoryNode';
import StoryChoices from '../components/StoryChoices';

const Index = () => {
  const [story, setStory] = useState(null);
  const [node, setNode] = useState(null);

  useEffect(() => {
    fetch('/api/story')
      .then((response) => response.json())
      .then((data) => {
        setStory(data);
        setNode(data.startNode);
      });
  }, []);

  const handleChoice = (nextNodeId: string) => {
    setNode(story.nodes[nextNodeId]);
  };

  return (
    <div>
      {node && (
        <>
          <StoryNode node={node} />
          <StoryChoices choices={node.choices} onChoice={handleChoice} />
        </>
      )}
    </div>
  );
};

export default Index;
