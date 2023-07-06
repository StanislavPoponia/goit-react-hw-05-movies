import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/api';
import React from 'react';
import MovieList from 'components/MovieList/MovieList';
import { SearchForm } from 'components/Form/Form';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    const fetchdata = async () => {
      if (!movieName) {
        return;
      }
      setIsLoading(true);
      try {
        const movies = await getMoviesByName(movieName);
        setMovies(movies.results);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieName]);

  return (
    <div>
    <SearchForm onSubmit={handleSubmit}/>
      <>
        {isLoading && <p>Loading...</p>}
        {movieName && (
         <MovieList trending={movies} loading={isLoading} />
        )}
      </>
    </div>
  );
};

export default Movies;