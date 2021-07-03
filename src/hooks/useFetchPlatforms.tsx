import React from "react";
import Ubisoft from "../utils/Ubisoft";

export const useFetchPlatforms = () => {
	const initialState = {
		loading: true,
		error: "",
		platforms: [],
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_SUCCESS":
				return {
					loading: false,
					platforms: action.payload,
					error: "",
				};
			case "FETCH_ERROR":
				return {
					loading: false,
					platforms: [],
					error: "Something went wrong!",
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = React.useReducer(reducer, initialState);

	const fetchPlatforms = () => {
		React.useEffect(() => {
			Ubisoft.getPlatforms()
				.then(data => {
					const { platforms } = data;
					dispatch({ type: "FETCH_SUCCESS", payload: platforms });
				})
				.catch(error => {
					dispatch({ type: "FETCH_ERROR", error: error });
				});
		}, []);
	};

	fetchPlatforms();

	return [state];
};
