import React from 'react';

function Movie({ detail }) {
	const { name, productionYear, genre, synopsisShort, synopsis, image } = detail;

	return (
		<div>
			<h1>{name}</h1>
			<p>{productionYear}</p>
			<p>{genre}</p>
			<p>{synopsisShort}</p>
			<p>{synopsis}</p>
			<p>{image}</p>
		</div>
	);
}

export default Movie;
