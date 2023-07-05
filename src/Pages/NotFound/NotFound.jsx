import { ListItem, InfoLink, Wrapper } from './NotFound.styled';
import React from 'react';
const NotFound = () => {
  return (
    <Wrapper>
      <h1>{' something wrong.'}</h1>
      <p>Links:</p>
      <ul>
        <ListItem>
          <InfoLink to="/">Home</InfoLink>
        </ListItem>

        <ListItem>
          <InfoLink to="/movies">Movies</InfoLink>{' '}
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default NotFound;