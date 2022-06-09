import * as S from './styles';

export const BackButton = () => {
	return (
		<S.BackBtn type="button">
			<S.LinkBtn to={'/'}>
				<S.ArrowBtn size={18} />
				Voltar
			</S.LinkBtn>
		</S.BackBtn>
	);
};
