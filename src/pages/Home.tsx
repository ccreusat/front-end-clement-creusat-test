// Import Components
import Layout from "../components/Layout";
import Filters from "../components/Filters";
import GamesList from "../components/GamesList";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Home = () => {
	const [currentFilter, setCurrentFilter] = useLocalStorage("filter", "All");

	return (
		<Layout pageTitle={`Games catalog ${currentFilter}`} layoutCSS="page">
			<Filters
				currentFilter={currentFilter}
				onFilterList={setCurrentFilter}
			/>
			<GamesList currentFilter={currentFilter} />
		</Layout>
	);
};

export default Home;
