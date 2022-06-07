import { UserPerfilType } from '../../types/user';

type UserPerfilProps = {
	userData: UserPerfilType;
};

export const UserPerfil = ({ userData }: UserPerfilProps) => {
	return (
		<>
			<img src={userData?.avatar_url} alt="foto de perfil" />

			<h2>{userData?.name || userData?.login}</h2>
			<p>{userData?.bio}</p>
		</>
	);
};
