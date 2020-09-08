import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from '../components/Error';

import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Container,
	Box
} from '@material-ui/core/';
import { useMovies } from '../MovieContext';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 350
	}
}));

function MovieDetail({ location }) {
	const classes = useStyles();

	const { movies, hasError, isFetching } = useMovies();

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
		<Container maxWidth='md'>
			<Box mb={4}>
				<Card>
					<CardMedia
						className={classes.media}
						component='img'
						image='https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg'
						title={thisMovie.name}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{thisMovie.name}
						</Typography>
						<CardActions>
							<Button
								component={Link}
								size='small'
								variant='outlined'
								to={`/movies/?genre=${thisMovie.genre}`}
							>
								{thisMovie.genre}
							</Button>
							<Button
								component={Link}
								size='small'
								variant='outlined'
								to={`/movies/?productionYear=${thisMovie.productionYear}`}
							>
								{thisMovie.productionYear}
							</Button>
						</CardActions>
						<Typography variant='body2' color='textSecondary' component='p'>
							{ReactHtmlParser(thisMovie.synopsis)}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
}

export default MovieDetail;
