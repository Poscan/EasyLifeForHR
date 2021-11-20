export interface IUserGroup {
  id: number;
  name: string;
}

export class UserGroup implements IUserGroup {
  constructor(userGroup: IUserGroup = { id: 0, name: "" }) {
    this.id = userGroup.id;
    this.name = userGroup.name;
  }

  id: number;
  name: string;
}

export interface IUser {
  id: number;
  username: string;
  role: UserGroup;
  mail: string;
  limitRefundMoney: number;
}

export default class User implements IUser {
  constructor(
    user: IUser = {
      id: 0,
      mail: "",
      role: new UserGroup(),
      username: "",
      limitRefundMoney: 0,
    }
  ) {
    this.id = user.id;
    this.username = user.username;
    this.role = user.role ? new UserGroup(user.role) : new UserGroup();
    this.mail = user.mail;
    this.limitRefundMoney = user.limitRefundMoney;
  }
  limitRefundMoney: number;
  id: number;
  username: string;
  role: UserGroup;
  mail: string;
}
