export interface IMovie {
  id: string
  name: string
  genre: string
  director: IDirector
}

export interface IDirector {
  id?: string
  name: string
}