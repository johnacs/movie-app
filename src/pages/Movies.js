import React from 'react';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Container, Typography, Box } from '@material-ui/core';
import { useMovies } from '../MovieContext';

function Movies({ location }) {
	const { movies, hasError, isFetching } = useMovies();

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
			<Box mb={4}>
				{genre ? (
					<Typography variant='h4' gutterBottom>
						{genre} movies
					</Typography>
				) : (
					<Typography variant='h4' gutterBottom>
						Movies from {productionYear}
					</Typography>
				)}
				<MovieList movies={filteredMovies} />
			</Box>
		</Container>
	);
}

export default Movies;
