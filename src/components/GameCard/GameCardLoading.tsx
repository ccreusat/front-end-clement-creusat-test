import * as React from "react";
import Skeleton from "react-loading-skeleton";
import { Card, CardContent } from "../../styles/GameCardStyles";

const GameCardLoading = () => (
	<Card>
		<Skeleton width={359} height={411} duration={2} />
		<CardContent>
			<Skeleton count={2} duration={2} />
		</CardContent>
	</Card>
);

export default GameCardLoading;
