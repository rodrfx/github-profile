import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { RepositoriesPage } from '../pages/RepositoriesPage';

export const Coordinator = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/repositories" element={<RepositoriesPage />} />
		</Routes>
	);
};
