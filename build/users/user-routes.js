"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_handlers_1 = require("./user-handlers");
var Router = express_1.default.Router();
Router.route('/user').get(user_handlers_1.getCurrentUser);
Router.route('/users').post(user_handlers_1.createUserHander);
exports.default = Router;
