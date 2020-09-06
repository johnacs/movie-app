import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1
	},
	hero: {
		backgroundColor: 'grey',
		backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg)',
		height: '350px',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center 25%',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		fontSize: '4rem'
	}
}));

function HeroBanner() {
	const classes = useStyles();

	return (
		<div>
			<Box className={classes.hero} />
		</div>
	);
}

export default HeroBanner;
