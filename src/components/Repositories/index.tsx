import { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { UserContext } from '../../context/UserContext';
import { useNavigateToHomepage } from '../../hooks/useNavigateToHomepage';
import { BackButton } from '../BackButton';
import { RepositoryItem } from '../RepositoryItem';
import * as S from './styles';

export const Repositories = () => {
	const { userRepositories } = useContext(UserContext);

	useNavigateToHomepage(userRepositories);

	return (
		<S.Container>
			<S.Header>
				<BackButton />
				<p>{userRepositories.length} Repositórios</p>
			</S.Header>

			<Scrollbars style={{ width: '100%', height: '100%' }}>
				<ul>
					{userRepositories?.map((repo) => (
						<li key={repo?.id}>
							<RepositoryItem
								name={repo?.name}
								language={repo?.language}
								html_url={repo?.html_url}
							/>
						</li>
					))}
				</ul>
			</Scrollbars>
			<span />
		</S.Container>
	);
};
