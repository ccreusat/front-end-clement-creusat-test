import styled from "styled-components";

export const GameDetailHero = styled.div`
	height: 368px;
	background-color: var(--cover);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: inset 0px -16px 16px rgba(0, 0, 0, 0.25);
`;

export const GameDetailContent = styled.div`
	margin: calc(var(--spacing-16) / 2);
	padding: calc(var(--spacing-16) * 2) var(--spacing-16);
	border: var(--border);
	background-color: var(--white);

	@media only screen and (min-width: 48rem) {
		& {
			margin: 3.55rem auto 4.94rem;
			padding: 3.55rem 4.66rem;
			max-width: 1168px;
			border: var(--border);
			background-color: var(--white);
		}
	}
`;

export const GameDetailHeading = styled.h2`
	font-size: 1.33rem;

	& + .small-heading {
		display: block;
		margin-top: var(--spacing-16);
	}

	@media only screen and (min-width: 48rem) {
		& + .small-heading {
			margin-top: 0;
		}
	}
`;

export const GameDetailPlatform = styled.span`
	font-size: 1rem;
`;

export const GameDetailText = styled.p`
	margin-top: 32px;
`;

export const GameDetailHeader = styled.div`
	@media only screen and (min-width: 48rem) {
		& {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
`;
