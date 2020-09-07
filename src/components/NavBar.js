import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button, Grid } from '@material-ui/core/';

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
