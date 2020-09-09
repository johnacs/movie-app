import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useMovies } from '../MovieContext';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectElement: {
		color: '#ffffff'
	}
}));

function GenreSelect({ history }) {
	const classes = useStyles();
	const [ genres, setGenres ] = useState([]);
	const [ genreSelected, setGenreSelected ] = useState('');
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

	const handleChange = (event) => {
		history.push(`/movies/?genre=${event.target.value}`);
	};

	if (hasError || isFetching) {
		return (
			<FormControl className={classes.formControl}>
				<Select
					value={genreSelected}
					onChange={handleChange}
					displayEmpty
					className={classes.selectElement}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value='' disabled>
						Genre
					</MenuItem>
				</Select>
			</FormControl>
		);
	}

	return (
		<div>
			<FormControl className={classes.formControl}>
				<Select
					value={genreSelected}
					onChange={handleChange}
					displayEmpty
					className={classes.selectElement}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value='' disabled>
						Genre
					</MenuItem>
					{genres.map((genre, index) => {
						return (
							<MenuItem key={index} value={genre}>
								{genre}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}

export default withRouter(GenreSelect);
