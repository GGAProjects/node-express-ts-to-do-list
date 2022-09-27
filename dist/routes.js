"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var config_1 = require("./config");
var router = (0, express_1.Router)();
exports.router = router;
router.get("/", function (_req, res) {
    res.json({
        status: 200,
        message: "Testing2"
    });
});
router.use(config_1.setupResponse);
//# sourceMappingURL=routes.js.map