import { __awaiter, __generator } from "tslib";
import axios from "axios";
import Bill, { BillStatus, BillType, Frequency, } from "./model/bill";
import User, { UserGroup } from "./model/user";
export default {
    GetUsers: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/User/api")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new User(x); })];
                }
            });
        });
    },
    Authorize: function (login, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Auth/api?login=" + login + "&password=" + password)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    GetUserGroup: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/User/api/user-groups")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new UserGroup(x); })];
                }
            });
        });
    },
    GetAllBill: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new Bill(x); })];
                }
            });
        });
    },
    GetBillByUserId: function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api/" + userId)];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new Bill(x); })];
                }
            });
        });
    },
    GetBillByUsername: function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api/username/" + username)];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new Bill(x); })];
                }
            });
        });
    },
    GetBillByUserIdAndInterval: function (userId, leftDate, rightDate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api/" + userId + "/interval?leftDate" + leftDate + "&rightDate=" + rightDate)];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new Bill(x); })];
                }
            });
        });
    },
    GetBillTypes: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api/bill-types")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new BillType(x); })];
                }
            });
        });
    },
    GetBillStatus: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api/bill-status")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new BillStatus(x); })];
                }
            });
        });
    },
    GetFrequency: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Bill/api/frequency")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new Frequency(x); })];
                }
            });
        });
    },
    UpdateBillStatusByBillId: function (billId, bullStatusId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.post("http://192.168.43.210:5000/Bill/api/" + billId + "/change-status?billStatusId=" + bullStatusId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    UpdateUser: function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.post("http://192.168.43.210:5000/User/api", user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
};
//# sourceMappingURL=Service.js.map