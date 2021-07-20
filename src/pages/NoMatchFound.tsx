import { useLocation } from "react-router-dom";
// import bunny from "../images/bunny.jpeg";

// CSS
import { NoMatchContainer, NoMatchTitle } from "../styles/NoMatchStyles";

// Import Layout
import Layout from "../components/Layout";

const NoMatchFound = () => {
	let location = useLocation();

	return (
		<Layout pageTitle="404">
			<NoMatchContainer
				className="no-match"
				// style={{ backgroundImage: `url(${bunny})` }}
			>
				<NoMatchTitle>
					No match found for <em>{location.pathname}</em>
				</NoMatchTitle>
			</NoMatchContainer>
		</Layout>
	);
};

export default NoMatchFound;
