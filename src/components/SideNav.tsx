import { useQuery } from '@apollo/client';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
} from 'reactstrap';
import { GET_ALL_DIRECTORS } from '../graphql/queries';
import { IDirector } from '../types/directors';

export const SideNav: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_DIRECTORS);
  console.log({ data });

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
          <Form>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                name="movieName"
                placeholder="タイトル"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <input
                className="form-control"
                type="number"
                name="movieGenre"
                placeholder="ジャンル"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <select className="form-control" name="directroId">
                {data &&
                  data.getAllDirectors.map((director: IDirector) => (
                    <option key={director.id}>{director.name}</option>
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
