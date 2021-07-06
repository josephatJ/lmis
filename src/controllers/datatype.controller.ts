import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Datatype} from '../models';
import {DatatypeRepository} from '../repositories';

export class DatatypeController {
  constructor(
    @repository(DatatypeRepository)
    public datatypeRepository : DatatypeRepository,
  ) {}

  @post('/api/datatypes')
  @response(200, {
    description: 'Datatype model instance',
    content: {'application/json': {schema: getModelSchemaRef(Datatype)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datatype, {
            title: 'NewDatatype',
            exclude: ['datatypeid'],
          }),
        },
      },
    })
    datatype: Omit<Datatype, 'datatypeid'>,
  ): Promise<Datatype> {
    return this.datatypeRepository.create(datatype);
  }

  @get('/api/datatypes/count')
  @response(200, {
    description: 'Datatype model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Datatype) where?: Where<Datatype>,
  ): Promise<Count> {
    return this.datatypeRepository.count(where);
  }

  @get('/api/datatypes')
  @response(200, {
    description: 'Array of Datatype model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Datatype, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Datatype) filter?: Filter<Datatype>,
  ): Promise<Datatype[]> {
    return this.datatypeRepository.find(filter);
  }

  @patch('/api/datatypes')
  @response(200, {
    description: 'Datatype PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datatype, {partial: true}),
        },
      },
    })
    datatype: Datatype,
    @param.where(Datatype) where?: Where<Datatype>,
  ): Promise<Count> {
    return this.datatypeRepository.updateAll(datatype, where);
  }

  @get('/api/datatypes/{id}')
  @response(200, {
    description: 'Datatype model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Datatype, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Datatype, {exclude: 'where'}) filter?: FilterExcludingWhere<Datatype>
  ): Promise<Datatype> {
    return this.datatypeRepository.findById(id, filter);
  }

  @patch('/api/datatypes/{id}')
  @response(204, {
    description: 'Datatype PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Datatype, {partial: true}),
        },
      },
    })
    datatype: Datatype,
  ): Promise<void> {
    await this.datatypeRepository.updateById(id, datatype);
  }

  @put('/api/datatypes/{id}')
  @response(204, {
    description: 'Datatype PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() datatype: Datatype,
  ): Promise<void> {
    await this.datatypeRepository.replaceById(id, datatype);
  }

  @del('/api/datatypes/{id}')
  @response(204, {
    description: 'Datatype DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.datatypeRepository.deleteById(id);
  }
}
