import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link as RouterLink } from 'react-router-dom';
import Loading from './Loading';
import Error from '../components/Error';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, CardActions, Button } from '@material-ui/core';
import useFetchApi from '../utilities/fetchApi';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(3),
		margin: 'auto'
	},
	image: {
		width: '100%',
		height: 'auto'
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

const MOVIES_ENDPOINT = 'https://sometimes-maybe-flaky-api.gdshive.io/';

function MovieDetail({ location }) {
	const classes = useStyles();

	const { movies, isFetching, hasError } = useFetchApi(MOVIES_ENDPOINT);

	if (hasError) {
		return <Error />;
	}

	if (isFetching) {
		return <Loading />;
	}
	const query = new URLSearchParams(location.search);
	let movieName = query.get('movieName').toLowerCase();

	let thisMovie;

	if (movieName) {
		thisMovie = movies.filter((movie) => {
			return movie.name.toLowerCase() === movieName;
		});
	}
	thisMovie = thisMovie[0];

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item md>
						<img
							className={classes.img}
							alt='poster'
							src='https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg'
						/>
					</Grid>
					<Grid item md direction='column' spacing={2}>
						<Typography gutterBottom variant='h4'>
							{thisMovie.name}
						</Typography>
						<CardActions>
							<Button
								component={RouterLink}
								size='small'
								variant='outlined'
								to={`/movies/?genre=${thisMovie.genre}`}
							>
								{thisMovie.genre}
							</Button>
							<Button
								component={RouterLink}
								size='small'
								variant='outlined'
								to={`/movies/?productionYear=${thisMovie.productionYear}`}
							>
								{thisMovie.productionYear}
							</Button>
						</CardActions>

						<Typography variant='body2' gutterBottom>
							{ReactHtmlParser(thisMovie.synopsis)}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}

export default MovieDetail;
