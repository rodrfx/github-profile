import { BsFillMoonStarsFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
	height: 3rem;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.text};
	width: 100%;

	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	max-width: 800px;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		h1 {
			margin-left: 0.75rem;
			font-size: 1.3rem;
		}
	}
`;

export const SunIcon = styled(RiSunFill)`
	margin-right: 8px;
`;

export const MoonIcon = styled(BsFillMoonStarsFill)`
	margin-left: 8px;
`;
