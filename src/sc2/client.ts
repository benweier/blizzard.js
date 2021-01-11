import { Blizzard, BlizzardClient } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as sc2 from '../resources/sc2'

export interface SC2Client extends BlizzardClient {
  tmp<T = any>(args: ResourceOptions<any>): ResourceResponse<T>
}

export class SC2 extends Blizzard implements SC2Client {
  tmp = this.createClientResourceRequest(sc2.tmp)
}
