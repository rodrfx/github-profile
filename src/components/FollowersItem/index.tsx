import { Follower } from '../../types/follower';
import * as S from './styles';

export const FollowersItem = ({ avatar_url, login, html_url }: Follower) => {
	const goToGitHubPage = () => {
		window.open(html_url, '_blank');
	};

	return (
		<S.Container onClick={goToGitHubPage}>
			<img src={avatar_url} alt="foto de perfil" loading="lazy" />

			<p>
				<strong>{login}</strong>
			</p>
		</S.Container>
	);
};
