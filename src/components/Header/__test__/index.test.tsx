/**
 * @jest-environment jsdom
 */
// import dependencies
import React from "react";
import { render, screen } from "@testing-library/react";
import "../../SwitchToggle/__mock__/matchMedia";
import Header from "../index";
import { BrowserRouter } from "react-router-dom";

const MockHeader = ({ pageTitle }) => {
	return (
		<BrowserRouter>
			<Header pageTitle={pageTitle} />
		</BrowserRouter>
	);
};

describe("Header", () => {
	it("should render Header Element", async () => {
		render(<MockHeader pageTitle="Game Header" />);
	});

	it("should have a title prop", async () => {
		render(<MockHeader pageTitle="Game Header" />);

		const titleElement = screen.getByText(/game header/i);
		expect(titleElement).toBeInTheDocument();
	});

	it("title prop should be heading element", async () => {
		render(<MockHeader pageTitle="Game Header" />);

		const headingElement = screen.getByRole("heading");
		expect(headingElement).toBeInTheDocument();
	});

	it("title prop should be h1 element", async () => {
		render(<MockHeader pageTitle="Game Header" />);

		const headingElement = screen.getByRole("heading");
		expect(headingElement).toContainHTML("h1");
	});

	it("should have a logo element", async () => {
		render(<MockHeader pageTitle="Game Header" />);

		const logo = screen.getByTestId("logo");
		expect(logo).toBeInTheDocument();
	});
});
