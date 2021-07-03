import { gql } from '@apollo/client';

export const GET_ALL_MOVIES = gql`
  query getAllMovies {
    getAllMovies {
      id
      name
      genre
      director {
        name
      }
    }
  }
`;
