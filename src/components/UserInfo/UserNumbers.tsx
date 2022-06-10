import { useNavigate } from 'react-router-dom';
import { UserNumbersType } from '../../types/user';

type UserNumbersProps = {
	userData: UserNumbersType;
};

export const UserNumbers = ({ userData }: UserNumbersProps) => {
	const navigate = useNavigate();

	const handleClick = (path: string) => {
		navigate(path);
	};

	return (
		<div>
			<section onClick={() => handleClick('/repositories')}>
				<p>{userData?.public_repos}</p>
				<p>Repositórios</p>
			</section>

			<section onClick={() => handleClick('/followers')}>
				<p>{userData?.followers}</p>
				<p>Seguidores</p>
			</section>
			<section onClick={() => handleClick('/following')}>
				<p>{userData?.following}</p>
				<p>Seguindo</p>
			</section>
		</div>
	);
};
