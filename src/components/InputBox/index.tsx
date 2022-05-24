import React from 'react';
import { BsSearch } from 'react-icons/bs';
import * as S from './styles';

export const InputBox: React.FC = () => {
	return (
		<S.Container>
			<label htmlFor="github-name">Usuário do GitHub</label>
			<div>
				<input
					type="search"
					name="github-name"
					id="github-name"
					placeholder="rodrfx"
				/>
				<button>
					<BsSearch color={'#FFF'} />
				</button>
			</div>
		</S.Container>
	);
};
