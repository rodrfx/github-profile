import { Following } from '../../types/following';
import * as S from './styles';

export const FollowingItem = ({ avatar_url, login, html_url }: Following) => {
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
