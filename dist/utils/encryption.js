"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
var crypto_1 = __importDefault(require("crypto"));
var algorithm = 'aes-256-ctr';
var secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
var iv = crypto_1.default.randomBytes(16);
var encrypt = function (text) {
    var cipher = crypto_1.default.createCipheriv(algorithm, secretKey, iv);
    var encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};
exports.encrypt = encrypt;
var decrypt = function (hash) {
    var decipher = crypto_1.default.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
    var decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
};
exports.decrypt = decrypt;
//# sourceMappingURL=encryption.js.map