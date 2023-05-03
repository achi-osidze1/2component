import React from 'react'

const MovieList = (props) => {
    return(
        <ul>
            {props.movies?.map((n,index) => (
                <li key={index}>{n}</li>
            ))}
        </ul>
    );
}

export default MovieList