import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import GenreMenu from './GenreMenu';
import YearMenu from './YearMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		// flexGrow: 1,
		color: '#ffffff'
	}
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<Grid container spacing={2}>
					<Grid item>
						<Button className={classes.title} component={Link} to={`/`}>
							Movies
						</Button>
					</Grid>
					<Grid item>
						<GenreMenu />
					</Grid>
					<Grid item>
						<YearMenu />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
