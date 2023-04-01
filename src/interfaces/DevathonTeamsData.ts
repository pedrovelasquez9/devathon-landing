export interface Score {
	team_integration: number;
	repository_management: number;
	management_tools: number;
	priority_definition: number;
	functional_score: number;
	visual_score: number;
	accessibility_score: number;
	technical_score: number;
	documentation: number;
	db_model: number;
	proyect_integration: number;
}

export interface Data {
	name: string;
	score: Score;
	id: string;
}

export interface RootObject {
	devathon_edition: number;
	max_score: number;
	data: Data[];
}