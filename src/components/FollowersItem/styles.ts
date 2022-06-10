import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
	background-color: ${(props) => shade(0.3, props.theme.colors.primary)};
	width: 95%;
	border-radius: 10px;
	margin: 0.5rem auto;
	padding: 1rem;
	overflow: hidden;

	display: flex;
	align-items: center;

	img {
		width: 2rem;
		border-radius: 50%;
	}

	p {
		color: ${(props) => props.theme.colors.secondary};
		margin-left: 0.75rem;
	}

	&:hover {
		background-color: ${(props) => shade(0.5, props.theme.colors.primary)};
		cursor: pointer;
	}
`;
