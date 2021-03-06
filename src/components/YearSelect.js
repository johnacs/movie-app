import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select } from '@material-ui/core/';

import { useMovies } from '../MovieContext';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectElement: {
		color: '#ffffff',
		'&:before': {
			borderColor: '#fff'
		},
		'&:hover:not(.Mui-disabled):before': {
			borderColor: '#fff'
		},
		'&:after': {
			borderColor: '#fff'
		},
		'& .MuiSelect-icon': {
			color: '#fff'
		}
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
