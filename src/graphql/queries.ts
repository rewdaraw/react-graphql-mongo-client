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

export const GET_ALL_DIRECTORS = gql`
  query getAllDirectors {
    getAllDirectors {
      id
      name
      age
    }
  }
`;
