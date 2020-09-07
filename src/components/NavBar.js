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
import SelectGenre from './SelectGenre';
import GenreMenu from './GenreMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function NavBar({ movies }) {
	const classes = useStyles();

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<Grid container spacing={2}>
					<Grid item>
						<Typography variant='h6' color='inherit' className={classes.title} component={Link} to={`/`}>
							Movies
						</Typography>
					</Grid>
					<Grid item>
						<GenreMenu movies={movies} />
					</Grid>
					<Grid item>
						<Typography variant='h6' color='inherit' className={classes.title} component={Link} to={`/`}>
							Year
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}
