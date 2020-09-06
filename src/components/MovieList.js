import React from 'react';
import Movie from './Movie';
import { Grid } from '@material-ui/core';

function MovieList({ movies }) {
	return (
		<Grid container spacing={1}>
			{movies.map((movie, index) => {
				return (
					<Grid key={index} item xs={12} sm={6} md={4}>
						<Movie detail={movie} />
					</Grid>
				);
			})}
		</Grid>
	);
}

export default MovieList;
