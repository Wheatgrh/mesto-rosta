export interface ICheckListItem {
  quest: string,
  stat: boolean
}
export interface IUser {
  uuid?: number;
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  role?: string;
  checkList?: Array<{
    quest: string;
    stat: boolean;
  }> | null
}