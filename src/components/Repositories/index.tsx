import { useContext, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { RepositoryItem } from '../RepositoryItem';
import * as S from './styles';

export const Repositories = () => {
	const { userRepositories } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		const hasRepository = userRepositories.length > 1;

		if (!hasRepository) {
			navigate('/');
		}
	}, []);

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

			<Scrollbars style={{ height: '100%', width: '100%' }}>
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
