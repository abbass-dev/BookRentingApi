"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSelector = void 0;
var client_1 = require("@prisma/client");
exports.BookSelector = client_1.Prisma.validator()({
    isbn: true,
    title: true,
    author: true,
    quantity: true,
});
