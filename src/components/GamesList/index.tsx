import * as React from "react";
import GameCard from "../GameCard";
import GameCardLoading from "../GameCard/GameCardLoading";

// CSS
import { CardList } from "../../styles/GameListStyles";

// Hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetchGames } from "../../hooks/useFetchGames";

type GamesListProps = {
	currentFilter: string;
};

const GamesList = ({ currentFilter }: GamesListProps) => {
	const [{ loading, error, games }] = useFetchGames();
	const [storedGames, setStoredGames] = useLocalStorage("games", []);

	const [skeletonLoading, isSkeletonLoading] = React.useState(true);

	// Loading Fake Components + Storing Games List (Would not be ok with a larger list (thinking about infinite scroll, load action, interaction with DB, ...))
	React.useEffect(() => {
		if (loading) {
			isSkeletonLoading(false);
		} else {
			setStoredGames(games);
		}
	}, [loading]);

	// Render Game Card Component
	const renderGameCard = (game, index) => {
		return (
			<GameCard
				key={index}
				id={game.id}
				name={game.name}
				platform={game.platform}
				cover={game.cover}
			/>
		);
	};

	// Render GameList with Loading Skeleton if loading takes long.
	const renderGameList = () => {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		if (skeletonLoading) {
			return (
				<CardList>
					{arr.map(index => (
						<GameCardLoading key={`skeleton_${index}`} />
					))}
				</CardList>
			);
		}
		return currentFilter === "All" ? (
			<CardList>
				{games?.map((game, index) => renderGameCard(game, index))}
			</CardList>
		) : (
			<CardList>
				{games
					?.filter(game => game.platform === currentFilter)
					.map((game, index) => renderGameCard(game, index))}
			</CardList>
		);
	};

	if (error) {
		return (
			<div className="center">
				<p>{error}</p>
			</div>
		);
	}

	return renderGameList();
};

export default GamesList;
