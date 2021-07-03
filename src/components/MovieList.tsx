import { useQuery } from '@apollo/client';
import React, { memo } from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { GET_ALL_MOVIES } from '../graphql/queries';
import { IMovie } from '../types/movies';

export const MovieList: React.FC = memo(() => {
  console.log('MovieList rendered!');
  const { loading, error, data: movieList } = useQuery(GET_ALL_MOVIES);

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
              <th>監督</th>
            </tr>
          </thead>
          <tbody>
            {movieList &&
              movieList.getAllMovies.map((movie: IMovie) => (
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.director.name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
});

MovieList.displayName = 'MovieList';
