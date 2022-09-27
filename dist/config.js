"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupResponse = exports.HTTPStatus = void 0;
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTPStatus[HTTPStatus["UNAUTHORIZE"] = 401] = "UNAUTHORIZE";
    HTTPStatus[HTTPStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTPStatus[HTTPStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTPStatus[HTTPStatus["FIELDS_ERROR"] = 422] = "FIELDS_ERROR";
    HTTPStatus[HTTPStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HTTPStatus[HTTPStatus["INTERNAL"] = 500] = "INTERNAL";
    HTTPStatus[HTTPStatus["NOT_AVAILABLE"] = 503] = "NOT_AVAILABLE";
    HTTPStatus[HTTPStatus["GATEWAY"] = 504] = "GATEWAY";
})(HTTPStatus = exports.HTTPStatus || (exports.HTTPStatus = {}));
var setupResponse = function (_req, response, next) {
    response.onSuccess = function (_a) {
        var _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.code, code = _c === void 0 ? HTTPStatus.OK : _c, _d = _a.message, message = _d === void 0 ? "" : _d;
        return response.status(code).json({
            statusCode: code,
            message: message,
            data: data
        });
    };
    response.onError = function (_a) {
        var _b = _a.errors, errors = _b === void 0 ? {} : _b, _c = _a.code, code = _c === void 0 ? HTTPStatus.BAD_REQUEST : _c, _d = _a.message, message = _d === void 0 ? "" : _d;
        return response.status(code).json({
            statusCode: code,
            message: message,
            errors: errors
        });
    };
    next();
};
exports.setupResponse = setupResponse;
//# sourceMappingURL=config.js.map