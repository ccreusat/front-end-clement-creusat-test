import * as React from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

type ThemeType = "" | "light";

interface ThemeContextInterface {
	currentTheme: string;
	setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
	currentTheme: "",
	setCurrentTheme: () => {},
});

const ThemeProvider = ({ children }: any) => {
	const [name] = useLocalStorage<string>("theme", "");
	const [currentTheme, setCurrentTheme] = React.useState<any>(name);

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;
