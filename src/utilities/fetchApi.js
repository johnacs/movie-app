import { useEffect, useState } from 'react';

const useFetchApi = (url) => {
	const [ dataState, setDataState ] = useState({ movies: [], isFetching: true, hasError: false });
	const [ endpointUrl ] = useState(url);

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

	return dataState;
};

export default useFetchApi;
