import { shade } from 'polished';
import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import * as S from './styles';

interface Props {
	toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext);

	return (
		<S.Container>
			<S.Content>
				<div>
					<BsGithub size={20} />
					<h1>GitHub Profile</h1>
				</div>

				<div>
					<S.SunIcon size={20} />

					<Switch
						onChange={toggleTheme}
						checked={title === 'dark'}
						checkedIcon={false}
						uncheckedIcon={false}
						height={10}
						width={30}
						handleDiameter={16}
						offColor={colors.secondary}
						onColor={shade(0.4, colors.secondary)}
					/>

					<S.MoonIcon size={18} />
				</div>
			</S.Content>
		</S.Container>
	);
};
