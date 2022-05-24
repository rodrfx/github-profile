import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	margin: 1.5rem auto;
	background: ${(props) => props.theme.colors.primary};
	opacity: 0.8;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 9rem;

	label {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	input {
		height: 2rem;
		border-radius: 15px;
		width: 16rem;
		padding-left: 1rem;
		cursor: pointer;
		border: 0;

		&:focus,
		&:hover {
			outline: 2px solid ${(props) => props.theme.colors.secondary};
		}

		&::-webkit-search-cancel-button {
			cursor: pointer;
			position: relative;
			right: 10px;
		}
	}

	button {
		background: ${(props) => props.theme.colors.secondary};
		height: 2rem;
		width: 2rem;
		border-radius: 50%;
		margin-left: 0.75rem;
		border: 0;

		&:hover {
			opacity: 0.8;
		}
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		max-width: 500px;
	}

	@media (min-width: 1025px) {
		max-width: 600px;
	}
`;
