import React from "react";
import { Link } from "react-router-dom";
import SwitchToggle from "../SwitchToggle";

// CSS
import {
	HeaderWrapper,
	HeaderLogo,
	HeaderTitle,
} from "../../styles/HeaderStyles";

type HeaderProps = {
	pageTitle: string;
};

const Header = ({ pageTitle }: HeaderProps) => {
	return (
		<HeaderWrapper>
			<div>
				<Link to="/" aria-label="Ubisoft Connect+">
					<HeaderLogo id="logo" data-testid="logo" />
				</Link>
				<HeaderTitle>{pageTitle}</HeaderTitle>
			</div>
			<SwitchToggle data-testid="switch" />
		</HeaderWrapper>
	);
};

export default Header;
