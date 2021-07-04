import { useMutation, useQuery } from '@apollo/client';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
} from 'reactstrap';
import {
  ADD_MOVIE,
  ADD_DIRECTOR,
  GET_ALL_DIRECTORS,
  GET_ALL_MOVIES,
} from '../graphql/queries';
import { IDirector } from '../types/directors';

interface IAddMovieFormData {
  movieName: string;
  movieGenre: string;
  directorId: string;
}

interface IAddDirectorFormData {
  directorName: string;
  directorAge: number;
}

export const SideNav: React.FC = memo(() => {
  console.log('SideNav rendered!');
  const { loading, error, data: directorList } = useQuery(GET_ALL_DIRECTORS);
  const [addMovie] = useMutation(ADD_MOVIE, {
    refetchQueries: [{ query: GET_ALL_MOVIES }],
    awaitRefetchQueries: true,
  });
  const [addDirector] = useMutation(ADD_DIRECTOR, {
    refetchQueries: [{ query: GET_ALL_DIRECTORS }],
    awaitRefetchQueries: true,
  });
  const { register, handleSubmit } = useForm();

  const { register: registerDirector, handleSubmit: handleSubmitDirector } =
    useForm();

  const onSubmit = (formData: IAddMovieFormData, e: any) => {
    addMovie({
      variables: {
        name: formData.movieName,
        genre: formData.movieGenre,
        directorId: formData.directorId,
      },
    });
    e.target.reset();
  };

  const onSubmitDirector = (directorFormData: IAddDirectorFormData, e: any) => {
    console.log(directorFormData);
    addDirector({
      variables: {
        name: directorFormData.directorName,
        age: Number(directorFormData.directorAge),
      },
    });
    e.target.reset();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ directorList });

  return (
    <>
      <Card>
        <CardHeader>映画監督</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmitDirector(onSubmitDirector)}>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                placeholder="監督"
                {...registerDirector('directorName')}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <input
                className="form-control"
                type="number"
                placeholder="年齢"
                {...registerDirector('directorAge')}
              />
            </FormGroup>
            <Button className="mt-3" color="primary" type="submit">
              追加
            </Button>
          </Form>
        </CardBody>
      </Card>
      <Card className="mt-5">
        <CardHeader>映画作品</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                placeholder="タイトル"
                {...register('movieName')}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <input
                className="form-control"
                type="text"
                placeholder="ジャンル"
                {...register('movieGenre')}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <select className="form-control" {...register('directorId')}>
                {directorList &&
                  directorList.getAllDirectors.map((director: IDirector) => (
                    <option key={director.id} value={director.id}>
                      {director.name}
                    </option>
                  ))}
              </select>
            </FormGroup>
            <Button className="mt-3" color="primary" type="submit">
              追加
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
});

SideNav.displayName = 'SideNav';
