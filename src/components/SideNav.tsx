import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
} from 'reactstrap';
import { ADD_MOVIE, GET_ALL_DIRECTORS } from '../graphql/queries';
import { IDirector } from '../types/directors';

interface IAddMovieFormData {
  movieName: string;
  movieGenre: string;
  directorId: string;
}

export const SideNav: React.FC = () => {
  const { loading, error, data: directorList } = useQuery(GET_ALL_DIRECTORS);
  const [addMovie, { data }] = useMutation(ADD_MOVIE);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (formData: IAddMovieFormData) => {
    addMovie({
      variables: {
        name: formData.movieName,
        genre: formData.movieGenre,
        directorId: formData.directorId,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Card>
        <CardHeader>映画監督</CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                name="directorName"
                placeholder="監督"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <input
                className="form-control"
                type="number"
                name="directorAge"
                placeholder="年齢"
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
};
