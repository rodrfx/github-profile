import { Route, Routes } from 'react-router-dom';
import { FollowersPage } from '../pages/FollowersPage';
import { FollowingPage } from '../pages/FollowingPage';
import { Homepage } from '../pages/Homepage';
import { RepositoriesPage } from '../pages/RepositoriesPage';

export const Coordinator = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/repositories" element={<RepositoriesPage />} />
			<Route path="/followers" element={<FollowersPage />} />
			<Route path="/following" element={<FollowingPage />} />
		</Routes>
	);
};
