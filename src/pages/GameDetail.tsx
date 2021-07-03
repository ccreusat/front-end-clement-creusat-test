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

const GameDetail = () => {
	const [storedGames] = useLocalStorage("games", []);

	const { id } = useParams();

	const game = storedGames.find(game => game.id === id);

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
