import { Repository } from '../types/repository';
import { api } from './api';

export const getUserRepositories = async (
	username: string,
	setUserRepositories: (repository: Repository[]) => void
) => {
	try {
		const response = await api.get<Repository[]>(`${username}/repos`);
		setUserRepositories(response.data);
	} catch (error) {
		console.error(error);
	}
};
