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
					<HeaderLogo></HeaderLogo>
				</Link>
				<HeaderTitle>{pageTitle}</HeaderTitle>
			</div>
			<SwitchToggle />
		</HeaderWrapper>
	);
};

export default Header;
