export type User = {
	avatar_url: string;
	name: string;
	login: string;
	bio?: string;
	followers: number;
	following: number;
	public_repos: number;
};

export type UserPerfilType = {
	avatar_url: string;
	name: string;
	login: string;
	bio?: string;
};

export type UserNumbersType = {
	followers: number;
	following: number;
	public_repos: number;
};
