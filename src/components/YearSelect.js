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

function YearSelect({ history }) {
	const classes = useStyles();
	const [ years, setYears ] = useState([]);
	const [ yearSelected, setYearSelected ] = useState('');
	const { movies, hasError, isFetching } = useMovies();

	useEffect(
		() => {
			const unique = movies
				.map((item) => item.productionYear)
				.filter((value, index, self) => self.indexOf(value) === index);
			setYears(unique.sort());
		},
		[ movies ]
	);

	const handleChange = (event) => {
		history.push(`/movies/?productionYear=${event.target.value}`);
	};

	if (hasError || isFetching) {
		return (
			<FormControl className={classes.formControl}>
				<Select
					value={yearSelected}
					onChange={handleChange}
					displayEmpty
					className={classes.selectElement}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value='' disabled>
						Year
					</MenuItem>
				</Select>
			</FormControl>
		);
	}

	return (
		<div>
			<FormControl className={classes.formControl}>
				<Select
					value={yearSelected}
					onChange={handleChange}
					displayEmpty
					className={classes.selectElement}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					<MenuItem value='' disabled>
						Year
					</MenuItem>
					{years.map((year, index) => {
						return (
							<MenuItem key={index} value={year}>
								{year}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	);
}

export default withRouter(YearSelect);
