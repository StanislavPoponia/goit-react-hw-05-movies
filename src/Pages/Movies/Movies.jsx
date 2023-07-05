import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Notiflix from 'notiflix';
import { getMoviesByName } from 'services/api';
import { List, ListItem, MovieLink, Form } from './Movies.styled';
import React from 'react';


const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (!query) {
      Notiflix.Notify.info('Enter please a movie name.', );
    }
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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          placeholder="Enter the movie"
          autoComplete="on"
          color="success"
          defaultValue={movieName}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          size="small"
         
        >
          Search
        </Button>
      </Form>
     
      <>
        {isLoading && <p>Loading...</p>}
        {movieName && (
          <List>
            {movies.map(({ id, title, name }) => (
              <ListItem key={id}>
                <MovieLink to={`${id}`} state={{ from: fullPath }}>
                  {title || name}
                </MovieLink>
              </ListItem>
            ))}
          </List>
        )}
      </>
    </div>
  );
};

export default Movies;