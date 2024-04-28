export interface Team {
    id: string;
    name: string;
    isWinner: boolean;
    isRetired: boolean;
}

export interface Network {
    name: string;
    link: string;
    icon: string;
}

export interface Judge {
    name: string;
    project: string;
    networks: Network[];
    img: string;
}

export interface DevathonVIEditionData {
    devathon_edition: number;
    teams: Team[];
    judges: Judge[];
}