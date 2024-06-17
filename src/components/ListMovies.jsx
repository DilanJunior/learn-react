import withResults from '../mocks/results_movies.json'
import React from 'react';
const movies = withResults.Search;

export const RenderMovies = () => {

    if (!movies || movies === 0) {

        return <NoRenderMovies />;
    }

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                </li>
            ))}
        </ul>
    );
};


export function NoRenderMovies() {

    return <p>Peliculas No disponible...</p>;

}

export default RenderMovies


