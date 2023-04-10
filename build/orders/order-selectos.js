"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSelector = void 0;
var client_1 = require("@prisma/client");
exports.OrderSelector = client_1.Prisma.validator()({
    status: true,
    requestDate: true
});
