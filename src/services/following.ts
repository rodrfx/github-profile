import { api } from './api';

export const getUserFollowing = async (
	username: string,
	setUserFollowing: () => void
) => {
	try {
		const response = await api.get(`${username}/following`);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};
