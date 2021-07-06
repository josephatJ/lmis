import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LmisdbDataSource} from '../datasources';
import {Datatype, DatatypeRelations} from '../models';

export class DatatypeRepository extends DefaultCrudRepository<
  Datatype,
  typeof Datatype.prototype.datatypeid,
  DatatypeRelations
> {
  constructor(
    @inject('datasources.lmisdb') dataSource: LmisdbDataSource,
  ) {
    super(Datatype, dataSource);
  }
}
