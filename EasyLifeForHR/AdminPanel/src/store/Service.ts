import axios from "axios";
import Bill, {
  BillStatus,
  BillType,
  Frequency,
  IBill,
  IBillStatus,
  IBillType,
  IFrequency,
} from "./model/bill";
import User, { IUser, IUserGroup, UserGroup } from "./model/user";

export default {
  async GetUsers(): Promise<User[]> {
    return (await axios.get("http://192.168.43.210:5000/User/api")).data.map(
      (x: IUser) => new User(x)
    );
  },

  async Authorize(login: string, password: string): Promise<number> {
    return await axios.get(
      `http://192.168.43.210:5000/Auth/api?login=${login}&password=${password}`
    );
  },

  async GetUserGroup(): Promise<UserGroup[]> {
    return (
      await axios.get("http://192.168.43.210:5000/User/api/user-groups")
    ).data.map((x: IUserGroup) => new UserGroup(x));
  },

  async GetAllBill(): Promise<Bill[]> {
    return (await axios.get("http://192.168.43.210:5000/Bill/api")).data.map(
      (x: IBill) => new Bill(x)
    );
  },

  async GetBillByUserId(userId: number): Promise<Bill[]> {
    return (
      await axios.get(`http://192.168.43.210:5000/Bill/api/${userId}`)
    ).data.map((x: IBill) => new Bill(x));
  },

  async GetBillByUsername(username: string): Promise<Bill[]> {
    return (
      await axios.get(
        `http://192.168.43.210:5000/Bill/api/username/${username}`
      )
    ).data.map((x: IBill) => new Bill(x));
  },

  async GetBillByUserIdAndInterval(
    userId: number,
    leftDate: Date,
    rightDate: Date
  ): Promise<Bill[]> {
    return (
      await axios.get(
        `http://192.168.43.210:5000/Bill/api/${userId}/interval?leftDate${leftDate}&rightDate=${rightDate}`
      )
    ).data.map((x: IBill) => new Bill(x));
  },

  async GetBillTypes(): Promise<BillType[]> {
    return (
      await axios.get(`http://192.168.43.210:5000/Bill/api/bill-types`)
    ).data.map((x: IBillType) => new BillType(x));
  },

  async GetBillStatus(): Promise<BillStatus[]> {
    return (
      await axios.get(`http://192.168.43.210:5000/Bill/api/bill-status`)
    ).data.map((x: IBillStatus) => new BillStatus(x));
  },

  async GetFrequency(): Promise<Frequency[]> {
    return (
      await axios.get(`http://192.168.43.210:5000/Bill/api/frequency`)
    ).data.map((x: IFrequency) => new Frequency(x));
  },

  async UpdateBillStatusByBillId(
    billId: number,
    bullStatusId: number
  ): Promise<void> {
    return await axios.post(
      `http://192.168.43.210:5000/Bill/api/${billId}/change-status?billStatusId=${bullStatusId}`
    );
  },

  async UpdateUser(user: User): Promise<void> {
    return await axios.post(`http://192.168.43.210:5000/User/api`, user);
  },
};
