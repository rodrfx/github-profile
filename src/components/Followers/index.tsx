import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { UserContext } from '../../context/UserContext';
import { useNavigateToHomepage } from '../../hooks/useNavigateToHomepage';
import { BackButton } from '../BackButton';
import { FollowersItem } from '../FollowersItem';
import * as S from './styles';

export const Followers = () => {
	const { userFollowers } = useContext(UserContext);

	useNavigateToHomepage(userFollowers);

	return (
		<S.Container>
			<S.Header>
				<BackButton />
				<p>{userFollowers.length} Seguidores</p>
			</S.Header>

			<Scrollbars style={{ width: '100%', height: '100%' }}>
				<ul>
					{userFollowers?.map((follower) => (
						<li key={follower.id}>
							<FollowersItem
								avatar_url={follower.avatar_url}
								login={follower.login}
								html_url={follower.html_url}
							/>
						</li>
					))}
				</ul>
			</Scrollbars>
			<span />
		</S.Container>
	);
};
