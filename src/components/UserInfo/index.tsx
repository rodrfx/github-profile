import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import * as S from './styles';
import { UserNumbers } from './UserNumbers';
import { UserPerfil } from './UserPerfil';

export const UserInfo: React.FC = () => {
	const { userData } = useContext(UserContext);
	const [isShowRepository, setIsShowRepository] = useState(false);

	return (
		<S.Container>
			{isShowRepository ? (
				<div>REPOSITORIO</div>
			) : userData.name ? (
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
