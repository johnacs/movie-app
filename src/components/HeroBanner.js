import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
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
		marginBottom: '20px',
		[theme.breakpoints.down('xs')]: {
			height: 300
		}
	},
	herotext: {
		color: '#fff',
		fontSize: '2.5rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '2em'
		}
	}
}));

function HeroBanner() {
	const classes = useStyles();

	return (
		<Box className={classes.hero}>
			<Typography className={classes.herotext}>Movies DB</Typography>
		</Box>
	);
}

export default HeroBanner;
