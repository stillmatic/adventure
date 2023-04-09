import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Game } from '../types/Story.d';

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
      <h1>Select a Game</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link href={`/games/${game.id}`}>
              {game.title} - {game.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;