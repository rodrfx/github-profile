import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import * as S from './styles';
import { UserNumbers } from './UserNumbers';
import { UserPerfil } from './UserPerfil';

export const UserInfo: React.FC = () => {
	const { userData } = useContext(UserContext);

	return (
		<>
			{userData.login ? (
				<S.Container>
					<UserPerfil userData={userData} />
					<UserNumbers userData={userData} />
				</S.Container>
			) : (
				<S.Line />
			)}
		</>
	);
};
