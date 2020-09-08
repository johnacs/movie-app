import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	hero: {
		backgroundColor: 'grey',
		backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg)',
		height: '500px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '2.5rem',
		marginBottom: '20px',
		[theme.breakpoints.down('xs')]: {
			height: 300,
			fontSize: '2em'
		}
	}
}));

function HeroBanner() {
	const classes = useStyles();

	return (
		<Box className={classes.hero}>
			<Box>Movies DB</Box>
		</Box>
	);
}

export default HeroBanner;
