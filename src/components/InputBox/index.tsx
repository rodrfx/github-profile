import React, { FormEvent, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { UserContext } from '../../context/UserContext';
import { getUserFollowers } from '../../services/followers';
import { getUserFollowing } from '../../services/following';
import { getUserRepositories } from '../../services/repositories';
import { getUserData } from '../../services/user';
import * as S from './styles';

export const InputBox: React.FC = () => {
	const [username, setUsername] = useState('');
	const {
		setUserData,
		setUserRepositories,
		setUserFollowers,
		setUserFollowing,
	} = useContext(UserContext);

	const handleInputName = (event: React.FormEvent<HTMLInputElement>) => {
		setUsername(event.currentTarget.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		getUserData(username, setUserData);
		getUserRepositories(username, setUserRepositories);
		getUserFollowers(username, setUserFollowers);
		getUserFollowing(username, setUserFollowing);

		setUsername('');
	};

	return (
		<S.Container>
			<label htmlFor="github-name">Usuário do GitHub</label>
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					name="github-name"
					id="github-name"
					placeholder="rodrfx"
					value={username}
					onChange={handleInputName}
					onInvalid={(e) =>
						e.currentTarget.setCustomValidity('Insira seu nome de usuário!')
					}
					onInput={(e) => e.currentTarget.setCustomValidity('')}
					required
				/>
				<button>
					<BsSearch type="submit" color={'#FFF'} />
				</button>
			</form>
		</S.Container>
	);
};
