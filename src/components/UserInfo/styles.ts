import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
	width: 90%;
	max-width: 1200px;
	margin: 1rem auto;
	background: ${(props) => props.theme.colors.primary};
	opacity: 0.8;
	border-radius: 10px;

	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;

	img {
		width: 8rem;
		border-radius: 50%;
		border: 4px solid #fff;
		margin: 2rem 0;
	}

	> p {
		margin: 2rem 0;
		width: 90%;
	}

	div {
		width: 90%;
		display: flex;

		justify-content: space-around;
		padding: 1rem 0;
		margin-bottom: 1.5rem;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			background-color: ${(props) => props.theme.colors.secondary};
			width: 100%;
			height: 10px;
			border-radius: 0 0 10px 10px;
		}

		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			padding: 1rem;
			cursor: pointer;
			transition: color 0.2s;
			transition: background-color 0.2s;

			p:nth-child(1) {
				font-weight: 600;
				font-size: 1.3rem;
			}

			&:hover {
				color: ${(props) => props.theme.colors.secondary};
				background-color: ${(props) => shade(0.3, props.theme.colors.primary)};
				border-radius: 10px;
				/* opacity: 0.5; */
			}
		}
	}

	span {
		position: absolute;
		bottom: 0;
		background-color: ${(props) => props.theme.colors.secondary};
		width: 100%;
		height: 10px;
		border-radius: 0 0 10px 10px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		max-width: 500px;
	}

	@media (min-width: 1025px) {
		max-width: 600px;
	}
`;
