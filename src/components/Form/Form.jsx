import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Form } from './Form.styled';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';



 export const SearchForm = ({onSubmit}) =>{
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.movie.value;
    if (!query) {
      Notiflix.Notify.info('Enter please a movie name.', );
    }; onSubmit(query)}
    return(
        <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          placeholder="Enter the movie"
          autoComplete="on"
          color="success"
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
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };