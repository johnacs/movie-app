import React, { useState, useEffect, useContext } from 'react';

const MovieContext = React.createContext();

export function useMovies() {
	return useContext(MovieContext);
}

export function MovieProvider({ children }) {
	const [ dataState, setDataState ] = useState({
		movies: [],
		isFetching: true,
		hasError: false
	});
	const [ endpointUrl ] = useState('https://sometimes-maybe-flaky-api.gdshive.io/');

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				setDataState({ ...dataState, isFetching: true });
				const response = await fetch(endpointUrl);
				if (response.ok) {
					const data = await response.json();
					setDataState({
						...dataState,
						movies: data,
						isFetching: false
					});
				} else {
					setDataState({
						...dataState,
						hasError: true
					});
				}
			} catch (e) {
				setDataState({ ...dataState, hasError: true });
			}
		};
		fetchDataFromApi();

		return () => {
			setDataState({
				...dataState,
				isFetching: true,
				hasError: false
			});
		};
	}, []);

	return <MovieContext.Provider value={dataState}>{children}</MovieContext.Provider>;
}
