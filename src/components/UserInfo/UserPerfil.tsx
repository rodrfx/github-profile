type UserPerfil = {
	avatar_url: string;
	name: string;
	login: string;
	bio?: string;
};

type UserDataProps = {
	userData: UserPerfil;
};

export const UserPerfil = ({ userData }: UserDataProps) => {
	return (
		<>
			<img src={userData?.avatar_url} alt="foto de perfil" />

			<h2>{userData?.name || userData?.login}</h2>
			<p>{userData?.bio}</p>
		</>
	);
};
