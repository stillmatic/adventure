import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StoryNode from '../../components/StoryNode';
import StoryChoices from '../../components/StoryChoices';
import GameOver from '../../components/GameOver';
import { Story, Node } from '../../types/Story';
import { Box } from '@chakra-ui/react';

const GamePage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [story, setStory] = useState<Story | undefined>(undefined);
    const [node, setNode] = useState<Node | undefined>(undefined);

    useEffect(() => {
        if (id) {
            fetch(`/api/story/${id}`)
                .then((response) => response.json())
                .then((data: Story) => {
                    setStory(data);
                    setNode(data.tree.find((n) => n.id === data.tree[0].id));
                });
        }
    }, [id]);

    const startOver = () => {
        setNode(story?.tree.find((n) => n.id === story.tree[0].id));
    };

    const handleChoice = (nextNodeId: string) => {
        setNode(story?.tree.find((n) => n.id === nextNodeId));
    };

    return (
        <div>
            <Box
                // bg="gray.800"
                // color="white"
                w="50%"
                p={8}
                boxShadow="lg"
                mx="auto"
                my={20}
            >
                {story && node ? (
                    <>
                        <StoryNode node={node} />
                        <StoryChoices story={story} choices={node?.choices} onChoice={handleChoice} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                {story && node && node.choices.length === 0 ? (
                    <GameOver onStartOver={startOver} />
                ) : null}
            </Box>

        </div >
    );
};

export default GamePage;
