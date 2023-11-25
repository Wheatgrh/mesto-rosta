import {type $Fetch} from 'ofetch'
const baseURL = '/gpt'

export interface IGPTPayload  {
  message: string
}
export  class GptApi {
  constructor(private readonly fetch: $Fetch){}

  public async ask(payload: IGPTPayload): Promise<string> {
    return await this.fetch(baseURL, {
      method: 'POST',
      body: {...payload}
    })
  }
}