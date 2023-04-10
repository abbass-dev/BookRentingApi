"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = (0, express_1.default)();
var user_routes_1 = __importDefault(require("./users/user-routes"));
App.use(express_1.default.json());
App.use(user_routes_1.default);
App.listen(1338, function () {
    console.log('listining to 1339');
});
