"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateDTO = void 0;
var class_validator_1 = require("class-validator");
var TaskCreateDTO = (function () {
    function TaskCreateDTO() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: "El estado es obligatorio" }),
        __metadata("design:type", String)
    ], TaskCreateDTO.prototype, "taskStatusId", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: "El grupo es obligatorio" }),
        __metadata("design:type", String)
    ], TaskCreateDTO.prototype, "taskCategoryId", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ message: "La tarea es obligatoria" }),
        __metadata("design:type", String)
    ], TaskCreateDTO.prototype, "task", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], TaskCreateDTO.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsISO8601)(),
        __metadata("design:type", String)
    ], TaskCreateDTO.prototype, "expectedDate", void 0);
    return TaskCreateDTO;
}());
exports.TaskCreateDTO = TaskCreateDTO;
//# sourceMappingURL=TaskCreateDTO.js.map