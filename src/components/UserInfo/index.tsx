import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import * as S from './styles';
import { UserNumbers } from './UserNumbers';
import { UserPerfil } from './UserPerfil';

export const UserInfo: React.FC = () => {
	const { userData } = useContext(UserContext);

	return (
		<S.Container>
			{userData.login ? (
				<>
					<UserPerfil userData={userData} />
					<UserNumbers userData={userData} />
				</>
			) : (
				<span />
			)}
		</S.Container>
	);
};
