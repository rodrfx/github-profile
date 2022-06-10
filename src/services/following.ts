import { Following } from '../types/following';
import { api } from './api';

export const getUserFollowing = async (
	username: string,
	setUserFollowing: (following: Following[]) => void
) => {
	try {
		const response = await api.get(`${username}/following`);
		setUserFollowing(response.data);
	} catch (error) {
		console.error(error);
	}
};
