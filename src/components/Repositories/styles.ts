import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
	width: 90%;
	margin: 1rem auto;
	background: ${(props) => props.theme.colors.primary};
	opacity: 0.8;
	border-radius: 10px;
	height: calc(100vh - 4.5rem);

	position: relative;

	display: flex;
	flex-direction: column;

	button {
		align-self: flex-start;
		border: 0;
		background: ${(props) => props.theme.colors.primary};
		opacity: 0.8;
		padding: 0.5rem;

		&:hover {
			background: ${(props) => props.theme.colors.primary};
			opacity: 0.6;
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

	li {
		list-style-type: none;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		max-width: 31.25rem;
		max-height: 38.75rem;
	}

	@media (min-width: 1025px) {
		max-width: 37.5rem;
		max-height: 40.63rem;
	}
`;

export const ArrowBtn = styled(BsFillArrowLeftSquareFill)`
	fill: ${(props) => props.theme.colors.text};
	margin-right: 5px;
`;

export const LinkBtn = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.colors.text};

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.header`
	width: 90%;
	margin: 0.5rem auto 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		color: ${(props) => props.theme.colors.text};
	}
`;
