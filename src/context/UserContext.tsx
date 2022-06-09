import { createContext, ReactNode, useState } from 'react';
import { Repository } from '../types/repository';
import { User } from '../types/user';

type UserContextProviderProps = {
	children: ReactNode;
};

type UserContextProps = {
	userData: User;
	setUserData: (user: User) => void;
	userRepositories: Repository[];
	setUserRepositories: (repository: Repository[]) => void;
};

export const UserContext = createContext<UserContextProps>(
	{} as UserContextProps
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [userData, setUserData] = useState({} as User);
	const [userRepositories, setUserRepositories] = useState([] as Repository[]);

	return (
		<UserContext.Provider
			value={{ userData, userRepositories, setUserData, setUserRepositories }}
		>
			{children}
		</UserContext.Provider>
	);
};
