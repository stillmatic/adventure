export interface Choice {
    id: string;
}

export interface Node {
    id: string;
    title: string;
    description: string;
    choices: Choice[];
}

export interface Story {
    title: string;
    description: string;
    story_id: string;
    tree: Node[];
}

export interface Game {
    title: string;
    description: string;
    id: string;
    storyFile: string;
}
