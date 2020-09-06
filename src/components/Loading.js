import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

function Loading() {
	return (
		<Box m='2rem' display='flex' justifyContent='center'>
			<CircularProgress />
		</Box>
	);
}

export default Loading;
