import styled from "styled-components";

export const FiltersNav = styled.nav`
	margin: var(--spacing-16);
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 19.66rem;
	gap: 1.55rem;
`;
export const FiltersNavItem = styled.span`
	cursor: pointer;
	text-transform: uppercase;
	font-size: 1rem;

	&:hover,
	&.active {
		color: var(--orange);
		font-weight: 700;
	}
`;
