import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [showResults, setShowResults] = useState(false); // Initially hide results

    function submitForm(e) {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=${query}&page=1`)
            .then(response => response.json())
            .then(result => {
                setMovies(result.results);
                setShowResults(true); 
            })
            .catch(error => {
                console.error(error);
            });
    }

    function resultsOn() {
        setShowResults(!showResults); 
    }

    return (
        <div className='container-fluid w-100'>
            <form onSubmit={submitForm} className='form'>
                <div className="input-group-md">
                    <input 
                        className="form-control" 
                        type="text" 
                        name='search' 
                        placeholder='Start by entering a movie name' 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <button type="submit" className='btn-block btn btn-success btn-lg'>Search Now</button>
                </div>
            </form>
            {showResults && (
                <div>
                    <button onClick={resultsOn} className="btn btn-warning mt-3">Hide Results</button>
                    <div className='row cardResults'>
                        {movies.filter(movie => movie.poster_path).map(movie => (
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

export default SearchBar;
