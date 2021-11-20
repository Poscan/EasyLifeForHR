import { __awaiter, __generator } from "tslib";
import axios from "axios";
import User, { UserGroup } from "./model/user";
export default {
  GetUsers: function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              axios.get("http://192.168.43.210:5000/User/api"),
            ];
          case 1:
            return [
              2 /*return*/,
              _a.sent().data.map(function (x) {
                return new User(x);
              }),
            ];
        }
      });
    });
  },
  Authorize: function (login, password) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              axios.get(
                "http://192.168.43.210:5000/Auth/api?login=" +
                  login +
                  "&password=" +
                  password
              ),
            ];
          case 1:
            return [2 /*return*/, _a.sent()];
        }
      });
    });
  },
  GetUserGroup: function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              axios.get("http://192.168.43.210:5000/api/user-groups"),
            ];
          case 1:
            return [
              2 /*return*/,
              _a.sent().data.map(function (x) {
                return new UserGroup(x);
              }),
            ];
        }
      });
    });
  },
};
//# sourceMappingURL=Service.js.map
