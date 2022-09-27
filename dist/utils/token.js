"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secret = process.env.SECRET;
var tokenLife = process.env.TOKENLIFE;
var generateToken = function (data) {
    var token = jsonwebtoken_1.default.sign({ id: data.id }, secret, { expiresIn: tokenLife });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=token.js.map