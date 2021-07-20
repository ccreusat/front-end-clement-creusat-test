import styled from "styled-components";

export const CardList = styled.div`
	display: grid;
	margin-top: var(--spacing-16);
	padding-bottom: var(--spacing-16);
	place-content: center;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: var(--spacing-16);

	> a {
		color: inherit;
		text-decoration: none;
	}

	@media only screen and (min-width: 33rem) {
		& {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-16);
		}
	}

	@media only screen and (min-width: 48rem) {
		& {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media only screen and (min-width: 1110px) {
		& {
			grid-template-columns: repeat(4, 1fr);
			gap: calc(var(--spacing-16) * 2);
		}
	}
`;
