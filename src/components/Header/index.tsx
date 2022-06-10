import { Switch } from '@nextui-org/react';
import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import * as S from './styles';

interface Props {
	toggleTheme: () => void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
	const { title } = useContext(ThemeContext);
	const navigate = useNavigate();

	return (
		<S.Container>
			<S.Content>
				<div onClick={() => navigate('/')}>
					<BsGithub size={20} />
					<h1>GitHub Profile</h1>
				</div>

				<div>
					<S.SunIcon size={22} />

					<Switch
						onChange={toggleTheme}
						checked={title === 'dark'}
						color="secondary"
						size="sm"
					/>

					<S.MoonIcon size={18} />
				</div>
			</S.Content>
		</S.Container>
	);
};
