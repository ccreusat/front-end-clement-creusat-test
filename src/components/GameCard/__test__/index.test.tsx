/**
 * @jest-environment jsdom
 */
// import dependencies
import React from "react";
import { render, screen } from "@testing-library/react";
import GameCard from "../index";
import { BrowserRouter } from "react-router-dom";

/* type GameCardProps = {
	name: string;
}; */

const MockGameCard = ({
	name,
	platform,
}: {
	name: string;
	platform: string;
}) => {
	return (
		<BrowserRouter>
			<GameCard id="1" name={name} platform={platform} cover="test" />
		</BrowserRouter>
	);
};

describe("GameCard Title", () => {
	it("should have a card title element", async () => {
		render(<MockGameCard name="Assassin's Creed" platform="PS4" />);

		const cardTitle = screen.getByTestId("title");
		expect(cardTitle).toBeInTheDocument();
	});

	it("title should be h2 heading", async () => {
		render(<MockGameCard name="Assassin's Creed" platform="PS4" />);

		const cardTitle = screen.getByRole("heading");
		expect(cardTitle).toContainHTML("h2");
	});

	it("title element should have a text", async () => {
		render(<MockGameCard name="Assassin's Creed" platform="PS4" />);
		const cardTitle = screen.getByText(/assassin's creed/i);
		expect(cardTitle).toBeInTheDocument();
	});
});

describe("GameCard Platform", () => {
	it("should have a card platform element", async () => {
		render(<MockGameCard name="Assassin's Creed" platform="PS4" />);

		const cardPlatform = screen.getByTestId("platform");
		expect(cardPlatform).toBeInTheDocument();
	});

	it("platform should be p tag", async () => {
		render(<MockGameCard name="Assassin's Creed" platform="PS4" />);

		const cardPlatform = screen.getByTestId("platform");
		expect(cardPlatform).toContainHTML("p");
	});

	it("platform element should have a text", async () => {
		render(<MockGameCard name="Assassin's Creed" platform="PS4" />);
		const cardPlatform = screen.getByText(/ps4/i);
		expect(cardPlatform).toBeInTheDocument();
	});
});
