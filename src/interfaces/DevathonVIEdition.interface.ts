export interface Team {
  id: string;
  name: string;
  team?: string;
  isWinner: boolean;
  isRetired: boolean;
  project?: string;
  frontendRepo?: string;
  backendRepo?: string;
  members?: TeamMember[];
}

export interface TeamMember {
  name: string;
  img: string;
  linkedin: string;
}

export interface DevathonMenthor {
  name: string;
  img: string;
  linkedin: string;
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
  mehtors: DevathonMenthor[];
}
