import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'ade1daffc6bca963e80c58578c4f4361';

//trending movies request
export const getTrendingMovies = async () => {
    const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
    return data.results;
  };

  export const getMovieById = async movieId => {
    const res = await axios
      .get(`/movie/${movieId}?api_key=${KEY}`)
      .catch(error => {
        throw new Error('Sorry, we have a problem.');
      });
    return res.data;
  };

  export const getCredits = async movieId => {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
  
    return data.cast;
  };

  export const getReviews = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
    return data.results;
  };

  export const getMoviesByName = async query => {
    const { data } = await axios.get(
      `/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return data;
  };