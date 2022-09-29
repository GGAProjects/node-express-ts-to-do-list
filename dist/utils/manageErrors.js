"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manageErrors = exports.formatErrors = void 0;
var config_1 = require("@src/config");
var express_class_validator_1 = require("express-class-validator");
var formatErrors = function (data, _request, response) {
    var fields = data.reduce(function (fields, currentItem) {
        fields[currentItem.property] = Object.values(currentItem.constraints);
        return fields;
    }, {});
    return response.onError({
        errors: fields,
        code: config_1.HTTPStatus.FIELDS_ERROR,
        message: "Check your fields"
    });
};
exports.formatErrors = formatErrors;
var manageErrors = function (dtoValidation) {
    return (0, express_class_validator_1.makeValidateBody)(dtoValidation, undefined, exports.formatErrors);
};
exports.manageErrors = manageErrors;
//# sourceMappingURL=manageErrors.js.map