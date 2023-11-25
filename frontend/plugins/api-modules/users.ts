import { type $Fetch } from 'ofetch'
import { IUser } from '../../assets/types'
const baseURL = '/users'

export class UsersApi {
  constructor(private readonly fetch: $Fetch) { }


  public async update(payload: IUser): Promise<IUser> {
    return await this.fetch(baseURL, {
      method: 'PATCH',
      body: { ...payload }
    })
  }

}