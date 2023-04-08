import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

const storyData = {
    // Add your story data here
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(storyData);
};
