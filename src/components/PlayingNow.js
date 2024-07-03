import React, { useState } from 'react';

//creates a functional component for the Playing in Cinemas button
function PlayingNow() {
    //initializes state, once for the button that shows the results and one for the button that hides it
    const [data, setData] = useState([]);
    const [showResults, setShowResults] = useState(false);

    //creates an asynchronous function that fetches api data, parses it, and uses setData to set it to the state 
    async function getPlayingNow() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=')
            .then(response => response.json())
            .then(result => {setData(result.results) 
                setShowResults(true)})
            .catch(error => console.error(error));
    }

    //this function will handle the removing of the results with the hide button by changing the true/false value state of showResults
     function resultsOn() {
        setShowResults(!showResults);
    }

    //returns two buttons and the cards
    return (
        <div>
        <button onClick={getPlayingNow} className='btn btn-success btn-lg'>What's Currently Playing in Cinemas?</button>
        {showResults && (
            <div>
                <button onClick={resultsOn} className='btn btn-warning'>Hide Currently Playing</button>
                <div className='row cardResults'>
                    {data.map(movie => (
                        <div key={movie.id} className="col-md-3">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{movie.title}</h3>
                                    <p className="card-text"><strong>Released on:</strong> {movie.release_date}</p>
                                    <p className="card-text"><strong>Number of ratings:</strong> {movie.vote_count}</p>
                                    <p className="card-text"><strong>Average rating:</strong> {movie.vote_average}</p>
                                    <p className='card-description'><strong>Movie description:</strong> {movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
);
}
export default PlayingNow;
