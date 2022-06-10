import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { UserContext } from '../../context/UserContext';
import { useNavigateToHomepage } from '../../hooks/useNavigateToHomepage';
import { BackButton } from '../BackButton';
import { FollowingItem } from '../FollowingItem';
import * as S from './styles';

export const Following = () => {
	const { userFollowing } = useContext(UserContext);

	useNavigateToHomepage(userFollowing);

	return (
		<S.Container>
			<S.Header>
				<BackButton />
				<p>{userFollowing.length} Seguindo</p>
			</S.Header>

			<Scrollbars style={{ width: '100%', height: '100%' }}>
				<ul>
					{userFollowing?.map((following) => (
						<li key={following.id}>
							<FollowingItem
								avatar_url={following.avatar_url}
								login={following.login}
								html_url={following.html_url}
							/>
						</li>
					))}
				</ul>
			</Scrollbars>
			<span />
		</S.Container>
	);
};
