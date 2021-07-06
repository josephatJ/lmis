import {Entity, model, property} from '@loopback/repository';

@model({settings: {postgresql: {schema: 'public', table: 'datatype'},}})
export class Datatype extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'datatypeid',
      dataType: 'BIGINT',
      nullable: 'NO',
    },
  })
  datatypeid?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'name',
      dataType: 'VARCHAR',
      nullable: 'NO',
    },
  })
  name: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'createddate',
      dataType: 'TIMESTAMP',
      nullable: 'NO',
    },
  })
  createddate: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'createdby',
      dataType: 'BIGINT',
      nullable: 'NO',
    },
  })
  createdby: number;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'updateddate',
      dataType: 'TIMESTAMP',
      nullable: 'YES',
    },
  })
  updateddate?: string;

  @property({
    type: 'number',
    postgresql: {
    columnName: 'updatedby',
    dataType: 'BIGINT',
    nullable: 'YES',
  },
  })
  updatedby?: number;

  @property({
    type: 'string',
    postgresql: {
    columnName: 'description',
    dataType: 'VARCHAR',
    nullable: 'YES',
  },
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {
    columnName: 'shortname',
    dataType: 'VARCHAR',
    dataLength: 50,
    nullable: 'YES',
  },
  })
  shortname?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Datatype>) {
    super(data);
  }
}

export interface DatatypeRelations {
  // describe navigational properties here
}

export type DatatypeWithRelations = Datatype & DatatypeRelations;
