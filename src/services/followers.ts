import { api } from './api';
export const getUserFollowers = async (
	username: string,
	setUserFollowers: () => void
) => {
	try {
		const followers = await api.get(`${username}/followers`);
		console.log(followers.data);
	} catch (error) {
		console.error(error);
	}
};
