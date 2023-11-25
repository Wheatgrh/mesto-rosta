import {type $Fetch} from 'ofetch'
const baseURL = '/auth'

export interface ILoginPayload  {
  password: string;
  phone: string;
}

export interface ITokens {
  token: string;
  refresh: string;
}

export interface IUser {
  uuid: string;
    phone: string;
    isAdmin: string;
    staffProfile: {
      uuid: string
      name: string
      position: string
    }
    permissions: Array<string>
}

export interface ILoginResponse {
  tokens: ITokens
  user: IUser
}

export interface IRefreshPayload {
  refreshToken: string
}

export  class AuthApi {
  constructor(private readonly fetch: $Fetch){}

  public async login(payload: ILoginPayload): Promise<ILoginResponse> {
    return await this.fetch(`${baseURL}/login`, {
      method: 'POST',
      body: {...payload}
    })
  }

  public async refresh(payload: IRefreshPayload): Promise<ILoginResponse> {
    return await this.fetch(`${baseURL}/refresh`, {
      method: 'POST',
      body: {...payload}
    })
  }
}