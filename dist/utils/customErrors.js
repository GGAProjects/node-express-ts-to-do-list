"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsError = void 0;
var config_1 = require("@src/config");
var FieldsError = (function (_super) {
    __extends(FieldsError, _super);
    function FieldsError(message, fields) {
        var _this = _super.call(this) || this;
        _this.fields = {};
        _this.status = config_1.HTTPStatus.FIELDS_ERROR;
        Object.setPrototypeOf(_this, FieldsError.prototype);
        Error.captureStackTrace(_this, _this.constructor);
        _this.fields = fields;
        _this.message = message;
        return _this;
    }
    return FieldsError;
}(Error));
exports.FieldsError = FieldsError;
//# sourceMappingURL=customErrors.js.map