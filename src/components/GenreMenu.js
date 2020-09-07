import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function GenreMenu({ movies }) {
	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ genres, setGenres ] = useState([]);

	useEffect(() => {
		const unique = movies.map((item) => item.genre).filter((value, index, self) => self.indexOf(value) === index);
		setGenres(unique);
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
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
