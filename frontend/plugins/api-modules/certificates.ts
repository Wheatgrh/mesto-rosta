import { type $Fetch } from 'ofetch'
import { IUser } from '../../assets/types'
import { UploadedFile } from './uploads'
const baseURL = '/certificates'

export class CertificatesApi {
  constructor(private readonly fetch: $Fetch) { }
  private normalizeParams(data: {userUuid: string, file: UploadedFile}) {
    const copy = JSON.parse(JSON.stringify(data))
    if(copy.file) {
      copy.file = copy.file.uuid
    }
    return copy
  }


  public async create(payload: {userUuid: string, file: UploadedFile}): Promise<{file: UploadedFile, validated: boolean}> {
    const normalized = this.normalizeParams(payload)
    return await this.fetch(baseURL, {
      method: 'POST',
      body: { ...normalized }
    })
  }

}