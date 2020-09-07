import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

function SelectGenre({ movies }) {
	const classes = useStyles();

	const [ genres, setGenres ] = useState([]);

	useEffect(() => {
		const unique = movies.map((item) => item.genre).filter((value, index, self) => self.indexOf(value) === index);

		setGenres(unique);
	}, []);

	const handleChange = (e) => {
		console.log(`${e.target.value}`);
		setGenres(e.target.value);
		window.location = e.target.value;
		// this.props.history.push(e.target.value);
		// component={Link} to={`/movies/?genre=${genre}`}
	};

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor='genre-native-simple'>Genre</InputLabel>
				<Select
					native
					value={'123'}
					onChange={handleChange}
					inputProps={{
						name: 'genre',
						id: 'genre-native-simple'
					}}
				>
					<option aria-label='None' value='' />
					{genres.map((genre, index) => {
						return (
							<option value={`/movies/?genre=${genre}`} key={index}>
								{genre}
							</option>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}

export default SelectGenre;
