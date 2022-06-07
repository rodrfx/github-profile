import { Repository } from '../../types/repository';
import * as S from './styles';

export const RepositoryItem = ({ name, language, html_url }: Repository) => {
	const goToGitHubPage = () => {
		window.open(html_url, '_blank');
	};

	return (
		<S.Container onClick={goToGitHubPage}>
			<h3>
				<strong> {name}</strong>
			</h3>
			<p>{language}</p>
			<p>{html_url} </p>
		</S.Container>
	);
};
