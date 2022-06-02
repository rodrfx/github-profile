import { User } from '../context/UserContext';
import { api } from './api';

export const getUserData = async (
	username: string,
	setUserData: (user: User) => void
) => {
	try {
		const response = await api.get<User>(`/${username}`);
		setUserData(response.data);
	} catch (error) {
		console.error(error);
	}
};
