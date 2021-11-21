var UserGroup = /** @class */ (function () {
    function UserGroup(userGroup) {
        if (userGroup === void 0) { userGroup = { id: 0, name: "" }; }
        this.id = userGroup.id;
        this.name = userGroup.name;
    }
    return UserGroup;
}());
export { UserGroup };
var User = /** @class */ (function () {
    function User(user) {
        if (user === void 0) { user = {
            id: 0,
            mail: "",
            role: new UserGroup(),
            username: "",
            limitRefundMoney: 0,
        }; }
        this.id = user.id;
        this.username = user.username;
        this.role = user.role ? new UserGroup(user.role) : new UserGroup();
        this.mail = user.mail;
        this.limitRefundMoney = user.limitRefundMoney;
    }
    return User;
}());
export default User;
//# sourceMappingURL=user.js.map