import * as S from './styles';

export const UserInfo: React.FC = () => {
	return (
		<S.Container>
			<img
				src="https://avatars.githubusercontent.com/u/68661446?s=400&u=40e07c8a8b71b8d64c31a5419e97251884c5a186&v=4"
				alt="foto de perfil"
			/>

			<h2>Rodrigo Xavier</h2>
			<p>Descrição do perfil</p>
			<div>
				<section>
					<p>4</p>
					<p>Repositórios</p>
				</section>
				<section>
					<p>10</p>
					<p>Seguidores</p>
				</section>
				<section>
					<p>1</p>
					<p>Seguindo</p>
				</section>
			</div>
		</S.Container>
	);
};
