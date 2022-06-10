import styled from 'styled-components';

export const Container = styled.main`
	width: 90%;
	margin: 1rem auto;
	background: ${(props) => props.theme.colors.primary};
	opacity: 0.8;
	border-radius: 10px;
	height: calc(100vh - 9rem);

	position: relative;

	display: flex;
	flex-direction: column;

	span {
		position: absolute;
		bottom: 0;
		background-color: ${(props) => props.theme.colors.secondary};
		width: 100%;
		height: 10px;
		border-radius: 0 0 10px 10px;
	}

	li {
		list-style-type: none;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		max-width: 31.25rem;
		max-height: 83vh;
	}

	@media (min-width: 1025px) {
		max-width: 37.5rem;
		max-height: 85vh;
	}
`;

export const Header = styled.header`
	width: 90%;
	margin: 0.5rem auto 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;
