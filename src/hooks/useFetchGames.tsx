import * as React from "react";
import Ubisoft from "../utils/Ubisoft";

export const useFetchGames = () => {
	const initialState = {
		loading: true,
		games: [],
		error: "",
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_SUCCESS":
				return {
					loading: false,
					games: action.payload,
					error: "",
				};
			case "FETCH_ERROR":
				return {
					loading: false,
					games: [],
					error: "",
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = React.useReducer(reducer, initialState);

	const fetchGames = () => {
		React.useEffect(() => {
			Ubisoft.getGames()
				.then(data => {
					const {games} = data;
					dispatch({ type: "FETCH_SUCCESS", payload: games });
				})
				.catch(error => {
					dispatch({ type: "FETCH_ERROR", error: error });
				});
		}, []);
	};

	fetchGames();

	return [state];
};
