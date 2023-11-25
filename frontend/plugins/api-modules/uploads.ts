import {type $Fetch} from 'ofetch'
const baseURL = '/uploads'

export interface UploadedImage {
  key: string
  name: string
  thumbnail: {type:string, url: string}
  type: string
  url: string
  uuid: string
}

export interface UploadedFile {
  key: string
  name: string
  type: string
  url: string
}

export  class UploadsApi {
  constructor(private readonly fetch: $Fetch){}


  public async createImage(data: FormData): Promise<UploadedImage> {
    return await this.fetch(baseURL, {
      method: 'POST',
      body: data
    })
  }

  public async createFile(data: FormData): Promise<UploadedFile> {
    return await this.fetch(baseURL, {
      method: 'POST',
      body: data
    })
  }

}