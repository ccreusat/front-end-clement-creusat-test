import React from "react";

export const useFetchData = url => {
	const initialState = {
		loading: true,
		error: "",
		data: [],
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_SUCCESS":
				return {
					loading: false,
					data: action.payload,
					error: "",
				};
			case "FETCH_ERROR":
				return {
					loading: false,
					data: [],
					error: "Something went wrong!",
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = React.useReducer(reducer, initialState);

	React.useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			/* const simulateSlowAsync = async (stallTime = 3000) => {
				console.log("slow async");
				await new Promise(resolve => setTimeout(resolve, stallTime));
			};

			await simulateSlowAsync(); */

			fetch(url, {
				signal: abortController.signal,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
				.then(response => {
					return response.json();
				})
				.then(data => {
					dispatch({ type: "FETCH_SUCCESS", payload: data });
				})
				.catch(error => {
					console.log(error);
					if (error.name === "AbortSignal") {
						console.log("fetch aborted");
					} else {
						dispatch({ type: "FETCH_ERROR", error: error });
					}
				});
		};

		fetchData();

		return () => abortController.abort();
	}, [url]);

	return [state];
};
