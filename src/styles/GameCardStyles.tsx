import styled from "styled-components";

export const Card = styled.div`
	overflow: hidden;
	border-radius: 8px;
	box-shadow: 0 4px 4px hsla(0, 0%, 0%, 25%);
	background-color: var(--cover);
`;

export const CardContent = styled.div`
	padding: var(--spacing-16);
	background-color: var(--white);
`;

export const CardTitle = styled.h2`
	color: var(--dark);
	font-size: 1rem;
	line-height: 1;

	+ p {
		margin-top: 0.44rem;
	}
`;

export const CardPlatform = styled.p`
	color: var(--dark);
	font-size: 0.77rem;
	font-weight: 300;
	line-height: 1;
`;
