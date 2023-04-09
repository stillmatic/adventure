import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const storiesPath = path.join(process.cwd(), 'public', 'games', 'stories');
    const storyFiles = fs.readdirSync(storiesPath);

    const games = storyFiles.map((file) => {
        const storyPath = path.join(storiesPath, file);
        const rawData = fs.readFileSync(storyPath, 'utf8');
        const storyData = JSON.parse(rawData);

        return {
            id: storyData.story_id,
            title: storyData.title,
            description: storyData.description,
            storyFile: `stories/${file}`,
        };
    });

    res.status(200).json(games);
};