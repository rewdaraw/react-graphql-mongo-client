import { IDirector } from './directors';

export interface IMovie {
  id: string;
  name: string;
  genre: string;
  director: IDirector;
}
