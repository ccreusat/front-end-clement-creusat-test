import * as React from "react"; // Import React
/* import "@fontsource/roboto"; // Import Roboto Font
import "@fontsource/roboto/300.css"; // Weight Light.
import "@fontsource/roboto/700.css"; // Weight Bold. */
import Header from "../Header";

type LayoutProps = {
	pageTitle: string;
	layoutCSS?: string;
	children: any;
};

// Creating a main layout to call any component as children
const Layout = ({ pageTitle, layoutCSS, children }: LayoutProps) => {
	return (
		<React.Fragment>
			<Header pageTitle={pageTitle} />
			<main className={layoutCSS}>{children}</main>
		</React.Fragment>
	);
};

export default Layout;
