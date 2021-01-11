import { Blizzard, BlizzardClient } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as d3 from '../resources/d3'

export interface D3Client extends BlizzardClient {
  tmp<T = any>(args: ResourceOptions<any>): ResourceResponse<T>
}

export class D3 extends Blizzard implements D3Client {
  tmp = this.createClientResourceRequest(d3.tmp)
}
