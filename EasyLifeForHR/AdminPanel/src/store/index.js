import { __awaiter, __generator } from "tslib";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import User from "./model/user";
Vue.use(Vuex);
var SuperPuperDuperService = /** @class */ (function () {
    function SuperPuperDuperService() {
    }
    SuperPuperDuperService.prototype.GetUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/User/api")];
                    case 1: return [2 /*return*/, (_a.sent()).data.map(function (x) { return new User(x); })];
                }
            });
        });
    };
    SuperPuperDuperService.prototype.Authorize = function (login, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Auth/api?login=" + login + "&password=" + password)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    SuperPuperDuperService.prototype.FindBillByUserAndDate = function (login, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("http://192.168.43.210:5000/Auth/api?login=" + login + "&password=" + password)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    return SuperPuperDuperService;
}());
export { SuperPuperDuperService };
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {},
});
//# sourceMappingURL=index.js.map