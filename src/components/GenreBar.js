import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2)
		},
		display: 'flex',
		flexWrap: 'wrap'
	}
}));

function GenreBar({ movies }) {
	const classes = useStyles();

	const temp = movies.map(function(movie) {
		return movie.genre;
	});

	const set = new Set(temp);
	const genres = Array.from(set);

	return (
		<div className={classes.root}>
			{genres.map((genre, index) => {
				return (
					<Button
						key={index}
						component={Link}
						to={`/movies/?genre=${genre}`}
						variant='contained'
						color='primary'
						size='small'
					>
						{genre}
					</Button>
				);
			})}
		</div>
	);
}

export default GenreBar;
