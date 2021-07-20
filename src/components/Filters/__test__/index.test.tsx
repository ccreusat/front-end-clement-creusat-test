/**
 * @jest-environment jsdom
 */
// import dependencies
import React from "react";
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { renderHook } from "@testing-library/react-hooks";

import { useFetchData } from "../../../hooks/useFetchData";

import Filters from "../index";

const mockOnFilterList = jest.fn();
// const fetch = jest.fn(() => Promise.resolve());

/* beforeEach(() => {
	fetch("./platforms.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			return data;
		})
		.catch(error => {
			console.log(error);
		});
}); */

/* beforeAll(() => {
	global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
});

afterAll(() => {
	global.fetch.mockClear();
	delete global.fetch;
}); */

describe("Filters", () => {
	/* beforeAll(() => {
		global.fetch = fetch;
	});
	afterAll(() => {
		fetchMock.restore();
	}); */

	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it("should render <Filters />", async () => {
		render(<Filters currentFilter="All" onFilterList={mockOnFilterList} />);
		expect(screen.getByText(/loading/i)).toBeInTheDocument();
		waitForElementToBeRemoved(() => screen.getByText(/loading/i));
	});

	it("should fetch data", async () => {
		fetchMock.once(
			JSON.stringify({
				userId: 3,
				id: Math.floor(Math.random() * 100) + 1,
				title: "Do math homework",
				completed: false,
			})
		);
	});

	/* it("array should containing these elements", () => {
		const expected = ["PS4", "Switch"];
		expect(["PS4", "Switch"]).toEqual(expect.arrayContaining(expected));
	}); */
});
