/**
 * @jest-environment jsdom
 */
// import dependencies
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "../__mock__/matchMedia";
import SwitchToggle from "../index";

describe("Switch Toggle", () => {
	it("should render a switch toggle element", async () => {
		render(<SwitchToggle />);
	});

	it("should have an aria label", async () => {
		render(<SwitchToggle />);

		const inputNode = screen.getByLabelText("switch theme mode");
		expect(inputNode).toBeInTheDocument();
	});

	it("should switch theme on click", async () => {
		render(<SwitchToggle />);
		const inputNode = screen.getByTestId("toggle");
		const body = document.body;
		expect(body).toHaveClass("dark");

		fireEvent.click(inputNode);
		expect(localStorage.setItem("theme", '"light"'));
		expect(localStorage.getItem("theme")).toBe('"light"');
		document.body.className = "light";
		expect(body).toHaveClass("light");

		fireEvent.click(inputNode);
		expect(localStorage.setItem("theme", '"dark"'));
		expect(localStorage.getItem("theme")).toBe('"dark"');
		document.body.className = "dark";
		expect(body).toHaveClass("dark");
	});
});
