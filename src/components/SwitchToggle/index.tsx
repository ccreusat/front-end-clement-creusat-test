import * as React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useTheme } from "../../context/ThemeContext";

import { SwitchToggleWrap } from "../../styles/SwitchToggleStyles";

const SwitchToggle = () => {
	const { currentTheme, setCurrentTheme } = useTheme();
	const [name, setName] = useLocalStorage("theme", "dark");

	React.useEffect(() => {
		const detectUserDarkMode = () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", event => {
					if (event.matches) {
						setCurrentTheme("dark");
					} else {
						setCurrentTheme("light");
					}
				});
		};

		detectUserDarkMode();
	}, [setCurrentTheme]);

	React.useEffect(() => {
		const body = document.body;

		body.className = currentTheme;
	}, [currentTheme]);

	const handleSwitchTheme = () => {
		const isTheme = name === "light" ? "dark" : "light";
		setCurrentTheme(isTheme);
		setName(isTheme);
	};

	return (
		<SwitchToggleWrap
			aria-label="switch theme mode"
			id="switch"
			data-testid="toggle"
			onClick={() => handleSwitchTheme()}
		></SwitchToggleWrap>
	);
};

export default SwitchToggle;
