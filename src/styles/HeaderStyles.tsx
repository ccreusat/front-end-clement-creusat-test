import styled from "styled-components";

export const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--spacing-16);
	padding: var(--spacing-16);
	background-color: var(--black);
	transition: background 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const HeaderLogo = styled.div`
	display: inline-block;
	vertical-align: middle;
	width: 32px;
	height: 32px;
	background: var(--logo) center/100% no-repeat;
`;

export const HeaderTitle = styled.h1`
	display: inline-block;
	vertical-align: middle;
	margin-left: var(--spacing-16);
	color: var(--white);
`;
