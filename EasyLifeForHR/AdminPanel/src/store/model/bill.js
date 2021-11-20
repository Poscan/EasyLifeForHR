import User from "./user";
var BillStatus = /** @class */ (function () {
  function BillStatus(userGroup) {
    if (userGroup === void 0) {
      userGroup = { id: 0, status: "" };
    }
    this.id = userGroup.id;
    this.status = userGroup.status;
  }
  return BillStatus;
})();
export { BillStatus };
var BillType = /** @class */ (function () {
  function BillType(userGroup) {
    if (userGroup === void 0) {
      userGroup = { id: 0, name: "" };
    }
    this.id = userGroup.id;
    this.name = userGroup.name;
  }
  return BillType;
})();
export { BillType };
var Frequency = /** @class */ (function () {
  function Frequency(userGroup) {
    if (userGroup === void 0) {
      userGroup = { id: 0, name: "" };
    }
    this.id = userGroup.id;
    this.name = userGroup.name;
  }
  return Frequency;
})();
export { Frequency };
var Bill = /** @class */ (function () {
  function Bill(bill) {
    if (bill === void 0) {
      bill = {
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
      };
    }
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
  return Bill;
})();
export default Bill;
//# sourceMappingURL=bill.js.map
