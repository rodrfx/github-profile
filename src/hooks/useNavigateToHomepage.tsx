import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigateToHomepage = (data: unknown[]) => {
	const navigate = useNavigate();

	useEffect(() => {
		const hasFollower = data.length > 1;
		if (!hasFollower) {
			navigate('/');
		}
	}, []);
};
