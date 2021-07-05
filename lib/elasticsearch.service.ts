import { Client } from '@elastic/elasticsearch';
import type {
  Client as NewTypes,
  ClientOptions
} from '@elastic/elasticsearch/api/new';
import { Inject, Injectable, Optional } from '@nestjs/common';
import { ELASTICSEARCH_MODULE_OPTIONS } from './elasticsearch.constants';

@Injectable()
// @ts-expect-error @elastic/elasticsearch
export class ElasticsearchService extends Client implements NewTypes {
  constructor(
    @Optional() @Inject(ELASTICSEARCH_MODULE_OPTIONS) options: ClientOptions
  ) {
    super(options);
  }
}
