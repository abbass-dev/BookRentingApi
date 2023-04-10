"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseMapper = void 0;
var jwt_1 = require("../auth/utils/jwt");
//mapper used to generate
var UserResponseMapper = function (user) { return ({
    email: user.email,
    name: user.name,
    address: user.address,
    token: (0, jwt_1.Sign)({ id: user.id, isAdmin: user.isAdmin })
}); };
exports.UserResponseMapper = UserResponseMapper;
