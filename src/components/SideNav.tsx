import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
} from 'reactstrap';

export const SideNav: React.FC = () => {
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
                <option value="">宮崎駿</option>
                <option value="">宮崎駿</option>
                <option value="">宮崎駿</option>
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
