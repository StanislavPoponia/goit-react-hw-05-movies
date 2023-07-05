import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  margin: 15px 0;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const MovieLink = styled(Link)`
  color: black;
  font-weight: 500;
  :hover {
    color: #2e7d32;
  }
`;