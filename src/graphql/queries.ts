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

export const ADD_MOVIE = gql`
  mutation AddMovie($name: String, $genre: String, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      id
      name
      genre
      director {
        id
        name
        age
      }
    }
  }
`;
