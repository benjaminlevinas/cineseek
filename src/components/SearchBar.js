import React, {useState} from 'react';

function SearchBar() {
    let result;
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    async function submitForm(e) {
        e.preventDefault();

        const api = `https://api.themoviedb.org/3/search/movie?api_key=a743421f79881d409259e910e5d0d7fc&language=en-US&query=${query}&page=1`
        
        try {
            const response = await fetch(api);
            const result = await response.json();
            setMovies(result.results);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div class='container-fluid w-100'>
        <form onSubmit={submitForm} className='form'>
         <div className="input-group-md">
            <input class="form-control" type="text" name='search' placeholder='Start by entering a movie name' value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <button type="button submit" className="btn btn-secondary">Search Now</button>
         </div>
        </form>
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
          <p className="card-text"><strong>Average rating:</strong> {movie.vote_average}</p>
          <p className='card-description'><strong>Movie description:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  ))}
</div>
            </div>

    );
}

export default SearchBar;
