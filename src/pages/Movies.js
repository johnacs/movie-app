import React from 'react';
import MovieList from '../components/MovieList';
import GenreBar from '../components/GenreBar';
import useFetchApi from '../utilities/fetchApi';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const MOVIES_ENDPOINT = 'https://sometimes-maybe-flaky-api.gdshive.io/';

function Movies({ location }) {
	const { movies, isFetching, hasError } = useFetchApi(MOVIES_ENDPOINT);

	if (hasError) {
		return <Error />;
	}

	if (isFetching) {
		return <Loading />;
	}

	const query = new URLSearchParams(location.search);
	let genre = query.get('genre');
	let productionYear = query.get('productionYear');

	let filteredMovies;

	if (genre) {
		filteredMovies = movies.filter((movie) => {
			return movie.genre === genre;
		});
	} else if (productionYear) {
		filteredMovies = movies.filter((movie) => {
			return movie.productionYear == parseInt(productionYear, 10);
		});
	}

	return (
		<Container maxWidth='lg'>
			<GenreBar movies={movies} />
			<MovieList movies={filteredMovies} />
		</Container>
	);
}

export default Movies;
