import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
function Error() {
	return (
		<Container maxWidth='lg'>
			<Box>
				<Typography variant='h4' align='center'>
					Opps, something went wrong. Please reload
				</Typography>
			</Box>
		</Container>
	);
}

export default Error;
