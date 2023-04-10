"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSelector = void 0;
var client_1 = require("@prisma/client");
exports.UserSelector = client_1.Prisma.validator()({
    email: true,
    name: true,
    address: true,
});
