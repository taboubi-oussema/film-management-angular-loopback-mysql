import {Entity, model, property} from '@loopback/repository';

@model()
export class Films extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  release_date: string;

  @property({
    type: 'string',
    required: true,
  })
  genre: string;

  @property({
    type: 'string',
    required: true,
  })
  director: string;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Films>) {
    super(data);
  }
}

export interface FilmsRelations {
  // describe navigational properties here
}

export type FilmsWithRelations = Films & FilmsRelations;
