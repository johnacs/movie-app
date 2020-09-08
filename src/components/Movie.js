import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
	root: {
		height: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	media: {
		height: 240
	}
});

function Movie({ detail }) {
	const { name, productionYear, genre, synopsisShort, synopsis, image } = detail;

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea component={Link} color='primary' size='small' to={`/movie/?movieName=${name}`}>
				<CardMedia
					className={classes.media}
					component='img'
					image='https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg'
					title={name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{name}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{synopsisShort}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button component={Link} size='small' variant='outlined' to={`/movies/?genre=${genre}`}>
					{genre}
				</Button>
				<Button
					component={Link}
					size='small'
					variant='outlined'
					to={`/movies/?productionYear=${productionYear}`}
				>
					{productionYear}
				</Button>
			</CardActions>
		</Card>
	);
}

export default Movie;
