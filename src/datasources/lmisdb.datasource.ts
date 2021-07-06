import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lmisdb',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'lmis',
  password: 'LMISDB',
  database: 'lmisdb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LmisdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lmisdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lmisdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
