import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Game } from '../types/Story.d';
import { Box, Heading } from '@chakra-ui/react';

const Index = () => {
  const [games, setGames] = useState([] as Game[]);

  useEffect(() => {
    fetch('/api/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

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
        <Heading>Select a Game</Heading>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <Link href={`/games/${game.id}`}>
                {game.title} - {game.description}
              </Link>
            </li>
          ))}
        </ul>
      </Box>

    </div>
  );
};

export default Index;