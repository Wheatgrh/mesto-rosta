import { type $Fetch } from 'ofetch'
import { IUser } from '../../assets/types'
const baseURL = '/users'

export class UsersApi {
  constructor(private readonly fetch: $Fetch) { }
  private normalizeParams(user: IUser): IUser {
    const copy = JSON.parse(JSON.stringify(user))
    if(copy.avatar) {
      copy.avatar = copy.avatar.uuid
    }
    return copy
  }


  public async update(payload: IUser): Promise<IUser> {
    const normalized = this.normalizeParams(payload)
    return await this.fetch(baseURL, {
      method: 'PATCH',
      body: { ...normalized }
    })
  }

  public async getOne(phone: string): Promise<IUser> {
    return await this.fetch(`${baseURL}/${phone}`, {
      method: 'GET'
    })
  }

  public async updateInterests(payload: {userUuid: string, interests: Array<string>}){
    return await this.fetch(`${baseURL}/interests`, {
      method: 'PATCH',
      body: {...payload}
    })
  }

}