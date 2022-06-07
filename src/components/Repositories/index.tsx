import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { RepositoryItem } from '../RepositoryItem';
import * as S from './styles';

export const Repositories = () => {
	const { userRepositories } = useContext(UserContext);

	return (
		<S.Container>
			<S.Header>
				<button type="button">
					<S.LinkBtn to={'/'}>
						<S.ArrowBtn size={18} />
						Voltar
					</S.LinkBtn>
				</button>
				<p>{userRepositories.length} Repositórios</p>
			</S.Header>

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
			<span />
		</S.Container>
	);
};
