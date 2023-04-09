import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
    } = req;

    try {
        const storyPath = path.join(process.cwd(), 'public', 'games', 'stories', `${id}.json`);

        if (fs.existsSync(storyPath)) {
            const rawData = fs.readFileSync(storyPath, 'utf8');
            const storyData = JSON.parse(rawData);
            res.status(200).json(storyData);
        } else {
            res.status(404).json({ message: 'Story not found.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error reading story file.' });
    }
};
