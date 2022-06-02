import { createContext, ReactNode, useState } from 'react';

type UserContextProps = {
	children: ReactNode;
};

export type User = {
	avatar_url: string;
	name: string;
	login: string;
	bio?: string;
	followers: number;
	following: number;
	public_repos: number;
};

type UserContextType = {
	userData: {
		avatar_url: string;
		name: string;
		login: string;
		bio?: string;
		followers: number;
		following: number;
		public_repos: number;
	};
	setUserData: (user: User) => void;
};

export const UserContext = createContext<UserContextType>(
	{} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
	const [userData, setUserData] = useState({} as User);

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
	);
};
