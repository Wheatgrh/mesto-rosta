import { UploadedFile } from "../plugins/api-modules/uploads";

export interface ICheckListItem {
  quest: string,
  stat: boolean
}
export interface IUser {
  uuid?: string;
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  role?: string;
  avatar: UploadedFile;
  interests?: Array<string>
  certificates?: Array<{file: UploadedFile, validated: boolean}>
  checkList?: Array<{
    quest: string;
    stat: boolean;
  }> | null
}