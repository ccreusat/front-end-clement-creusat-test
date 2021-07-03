import { Switch, Route } from "react-router-dom";

// Import Main CSS
import "../../main.css";

// Import Pages
import Home from "../../pages/Home";
import GameDetail from "../../pages/GameDetail";
import NoMatchFound from "../../pages/NoMatchFound";

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/game-detail/:id">
				<GameDetail />
			</Route>
			<Route path="*">
				<NoMatchFound />
			</Route>
		</Switch>
	);
};

export default App;
