import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem } from '@material-ui/core/';

import { useMovies } from '../MovieContext';

const useStyles = makeStyles(() => ({
	title: {
		color: '#ffffff'
	}
}));

function GenreMenu() {
	const classes = useStyles();

	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ genres, setGenres ] = useState([]);
	const { movies, hasError, isFetching } = useMovies();

	useEffect(
		() => {
			const unique = movies
				.map((item) => item.genre)
				.filter((value, index, self) => self.indexOf(value) === index);
			setGenres(unique.sort());
		},
		[ movies ]
	);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (hasError || isFetching) {
		return <Button className={classes.title}>Genre</Button>;
	}

	return (
		<div>
			<Button className={classes.title} aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
				Genre
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{genres.map((genre, index) => {
					return (
						<MenuItem key={index} component={Link} to={`/movies/?genre=${genre}`}>
							{genre}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
}

export default GenreMenu;
