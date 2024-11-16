import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionFilmsDataSource} from '../datasources';
import {Films, FilmsRelations} from '../models';

export class FilmsRepository extends DefaultCrudRepository<
  Films,
  typeof Films.prototype.id,
  FilmsRelations
> {
  constructor(
    @inject('datasources.gestion_films') dataSource: GestionFilmsDataSource,
  ) {
    super(Films, dataSource);
  }
}
