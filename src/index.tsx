import * as React from "react";
import * as ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";

import App from "./containers/App";

const rootApp = document.getElementById("root");

ReactDOM.render(
	<ThemeProvider>
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	rootApp
);
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
if (module.hot) {
	module.hot.accept();
}
