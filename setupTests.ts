// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "regenerator-runtime/runtime";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

// jest.config.ts
import type { Config } from "@jest/types";

// Or async function
export default async (): Promise<Config.InitialOptions> => {
	return {
		verbose: true,
	};
};

//setupFilesAfterEnv: ["<rootDir>/jest-setup.js"];
