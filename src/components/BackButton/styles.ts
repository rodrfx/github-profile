import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled.button`
	border: 0;
	background: ${(props) => props.theme.colors.primary};
	opacity: 0.8;

	&:hover {
		background: ${(props) => props.theme.colors.primary};
		opacity: 0.6;
	}
`;

export const ArrowBtn = styled(BsFillArrowLeftSquareFill)`
	fill: ${(props) => props.theme.colors.text};
	margin-right: 5px;
`;

export const LinkBtn = styled(Link)`
	text-decoration: none;
	color: ${(props) => props.theme.colors.text};
	padding: 0.5rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;
