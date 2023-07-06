import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieLink, List, ListItem } from './MovieList.styled';

const MovieList = ({ trending, loading }) => {
  const location = useLocation();
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <List>
          {trending.map(({ id, title, name }) => (
            <ListItem key={id}>
              <MovieLink
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title || name}
              </MovieLink>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  trending: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};