import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button, Grid } from '@material-ui/core/';

import GenreSelect from './GenreSelect';
import YearSelect from './YearSelect';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1
	},
	title: {
		color: '#ffffff'
	}
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<Grid container spacing={2} alignItems='center'>
					<Grid item>
						<Button className={classes.title} component={Link} to={`/`}>
							Movies
						</Button>
					</Grid>
					<Grid item>
						<GenreSelect />
					</Grid>
					<Grid item>
						<YearSelect />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
