import User from "./user";

export interface IBillStatus {
  id: number;
  status: string;
}

export class BillStatus implements IBillStatus {
  constructor(userGroup: IBillStatus = { id: 0, status: "" }) {
    this.id = userGroup.id;
    this.status = userGroup.status;
  }

  id: number;
  status: string;
}

export interface IBillType {
  id: number;
  name: string;
}

export class BillType implements IBillType {
  constructor(userGroup: IBillType = { id: 0, name: "" }) {
    this.id = userGroup.id;
    this.name = userGroup.name;
  }

  id: number;
  name: string;
}

export interface IFrequency {
  id: number;
  name: string;
}

export class Frequency implements IFrequency {
  constructor(userGroup: IFrequency = { id: 0, name: "" }) {
    this.id = userGroup.id;
    this.name = userGroup.name;
  }

  id: number;
  name: string;
}

export interface IBill {
  id: number;
  name: string;
  date: Date;
  type: BillType;
  status: BillStatus;
  user: User;
  link: string;
  comment: string;
  frequency: Frequency;
  endDate: Date | null;
}

export default class Bill implements IBill {
  constructor(
    bill: IBill = {
      id: 0,
      name: "",
      date: new Date(),
      type: new BillType(),
      status: new BillStatus(),
      user: new User(),
      link: "",
      comment: "",
      frequency: new Frequency(),
      endDate: new Date(),
    }
  ) {
    this.id = bill.id;
    this.name = bill.name;
    this.date = bill.date ? new Date(bill.date) : new Date();
    this.type = bill.type ? new BillType(bill.type) : new BillType();
    this.status = bill.status ? new BillStatus(bill.status) : new BillStatus();
    this.user = bill.user ? new User(bill.user) : new User();
    this.link = bill.link;
    this.comment = bill.comment;
    this.frequency = bill.frequency
      ? new Frequency(bill.frequency)
      : new Frequency();
    this.endDate = bill.endDate;
  }

  id: number;
  name: string;
  date: Date;
  type: BillType;
  status: BillStatus;
  user: User;
  link: string;
  comment: string;
  frequency: Frequency;
  endDate: Date | null;
}
