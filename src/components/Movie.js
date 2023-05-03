import React from 'react'
import MovieList from './MovieList';

const Movie = () => {

    const movies = [
        "Lord Of The Rings",
        "Fight Club",
        "Batman",
        "Django",
        "Kill Bill",
        "Inception",
        "Oppenheimer"
    ]
    
    return(
        <div>
            <MovieList movies={movies}/>
        </div>
    );
}

export default Movie