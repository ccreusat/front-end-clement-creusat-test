import * as React from "react";
// Router
import { useParams } from "react-router-dom";

// Component Layout
import Layout from "../components/Layout";

// Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";

// CSS
import {
	GameDetailHero,
	GameDetailContent,
	GameDetailHeader,
	GameDetailHeading,
	GameDetailPlatform,
	GameDetailText,
} from "../styles/GameDetailStyles";

import { useFetchData } from "../hooks/useFetchData";

const GameDetail = () => {
	const [{ loading, error, data }] = useFetchData("./games.json");
	const [storedGames, setStoredGames] = useLocalStorage("games", []);
	const { id } = useParams<{ id: string }>() || {};

	const game =
		storedGames.find(info => info.id === id) ||
		data.games.find(info => info.id === id);

	React.useEffect(() => {
		console.log(loading);

		if (!loading) {
			setStoredGames(data.games);
		}
	}, [loading]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error...</p>;
	}

	return (
		<Layout pageTitle="Game details" layoutCSS="detail">
			<div className="game">
				<GameDetailHero
					className="game__hero"
					style={{ backgroundImage: `url(${game.hero})` }}
				></GameDetailHero>
				<GameDetailContent className="game__content">
					<GameDetailHeader className="game__header">
						<GameDetailHeading className="main-heading">
							{game.name}
						</GameDetailHeading>
						<GameDetailPlatform className="small-heading">
							{game.platform}
						</GameDetailPlatform>
					</GameDetailHeader>
					<GameDetailText>{game.description}</GameDetailText>
				</GameDetailContent>
			</div>
		</Layout>
	);
};

export default GameDetail;
