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

export default function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<Grid justify='start' container spacing={24}>
					<Grid item>
						<Typography variant='h6' color='inherit' className={classes.title} component={Link} to={`/`}>
							Movies
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='h6' color='inherit' className={classes.title} component={Link} to={`/`}>
							Genre
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='h6' color='inherit' className={classes.title} component={Link} to={`/`}>
							Year
						</Typography>
					</Grid>
				</Grid>

				{/* <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
					<MenuIcon />
				</IconButton> */}
				{/* <Button component={Link} to={`/`} color='inherit'>
					All
				</Button>
				<Button color='inherit'>Genres</Button>
				<Button color='inherit'>Year</Button> */}
			</Toolbar>
		</AppBar>
	);
}
