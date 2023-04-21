export interface NetworkInfo {
	icon: string;
	url: string;
}

export interface Sponsor {
	id: string;
	name: string;
	logo: string;
	bigLogo?: boolean;
	circled?: boolean;
	networks: NetworkInfo[];
}