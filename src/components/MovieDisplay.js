import React, { useEffect } from 'react'

export default function MovieDisplay({ movieList }) {
	console.log("component->", movieList);
	useEffect(() => {
		console.log("Inside component", movieList)
	}, [movieList])

	return (
		<div>
			{
				movieList && movieList.length && movieList.map((movie, index) => (
					<div key={index} className="movie--card">
						<div><p className="movie--title">{movie.name}</p></div>
						<div><p className="rating"><span className="movie--rating">⭐</span><span>{movie.rating}</span></p></div>
						<div><p>{movie.description}</p></div>
					</div>

				))
			}
		</div>
	)
}
