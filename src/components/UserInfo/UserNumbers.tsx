type UserNumbers = {
	followers: number;
	following: number;
	public_repos: number;
};

type UserDataProps = {
	userData: UserNumbers;
};

export const UserNumbers = ({ userData }: UserDataProps) => {
	return (
		<div>
			<section>
				<p>{userData?.public_repos}</p>
				<p>Repositórios</p>
			</section>
			<section>
				<p>{userData?.followers}</p>
				<p>Seguidores</p>
			</section>
			<section>
				<p>{userData?.following}</p>
				<p>Seguindo</p>
			</section>
		</div>
	);
};
