import { createContext, ReactNode, useState } from 'react';
import { Follower } from '../types/follower';
import { Following } from '../types/following';
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
	userFollowers: Follower[];
	setUserFollowers: (follower: Follower[]) => void;
	userFollowing: Following[];
	setUserFollowing: (Following: Following[]) => void;
};

export const UserContext = createContext<UserContextProps>(
	{} as UserContextProps
);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [userData, setUserData] = useState({} as User);
	const [userRepositories, setUserRepositories] = useState([] as Repository[]);
	const [userFollowers, setUserFollowers] = useState([] as Follower[]);
	const [userFollowing, setUserFollowing] = useState([] as Following[]);

	return (
		<UserContext.Provider
			value={{
				userData,
				userRepositories,
				setUserData,
				setUserRepositories,
				userFollowers,
				setUserFollowers,
				userFollowing,
				setUserFollowing,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
