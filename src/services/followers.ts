import { Follower } from '../types/follower';
import { api } from './api';

export const getUserFollowers = async (
	username: string,
	setUserFollowers: (follower: Follower[]) => void
) => {
	try {
		const response = await api.get(`${username}/followers`);
		setUserFollowers(response.data);
	} catch (error) {
		console.error(error);
	}
};
