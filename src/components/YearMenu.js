import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem } from '@material-ui/core/';

import { useMovies } from '../MovieContext';

const useStyles = makeStyles((theme) => ({
	title: {
		color: '#ffffff'
	}
}));

function YearMenu() {
	const classes = useStyles();

	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ years, setYears ] = useState([]);
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

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (hasError || isFetching) {
		return <Button className={classes.title}>Year</Button>;
	}

	return (
		<div>
			<Button className={classes.title} aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
				Year
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{years.map((year, index) => {
					return (
						<MenuItem key={index} component={Link} to={`/movies/?productionYear=${year}`}>
							{year}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
}

export default YearMenu;
