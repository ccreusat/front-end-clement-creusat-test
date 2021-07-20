import React from "react";
import { Link } from "react-router-dom";

import {
	Card,
	CardContent,
	CardTitle,
	CardPlatform,
} from "../../styles/GameCardStyles";

type GameCardProps = {
	id: string;
	name: string;
	cover: string;
	platform: any;
};

const GameCard = ({ id, name, platform, cover }: GameCardProps) => {
	return (
		<Link to={`/game-detail/${id}`}>
			<Card>
				<img
					src={cover}
					className="fit-image"
					width="359"
					height="411"
					alt={"image" + name}
				/>
				<CardContent>
					<CardTitle data-testid="title">{name}</CardTitle>
					<CardPlatform data-testid="platform">
						{platform}
					</CardPlatform>
				</CardContent>
			</Card>
		</Link>
	);
};

export default GameCard;
