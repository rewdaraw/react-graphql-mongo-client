import { useMutation, useQuery } from '@apollo/client';
import React, { memo } from 'react';
import { Button, Card, CardBody, Table } from 'reactstrap';
import { GET_ALL_MOVIES, DELETE_MOVIE } from '../graphql/queries';
import { IMovie } from '../types/movies';

export const MovieList: React.FC = memo(() => {
  console.log('MovieList rendered!');
  const { loading, error, data: movieList } = useQuery(GET_ALL_MOVIES);
  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{ query: GET_ALL_MOVIES }],
    awaitRefetchQueries: true,
  });
  const handleDeleteMovie = (id: string) => {
    console.log(id);
    deleteMovie({ variables: { id } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ movieList });

  return (
    <Card>
      <CardBody>
        <Table hover>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>ジャンル</th>
              <th colSpan={2}>監督</th>
            </tr>
          </thead>
          <tbody>
            {movieList &&
              movieList.getAllMovies.map((movie: IMovie) => (
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.director.name}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => {
                        handleDeleteMovie(movie.id);
                      }}
                    >
                      削除
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
});

MovieList.displayName = 'MovieList';
