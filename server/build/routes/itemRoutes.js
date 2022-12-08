"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController_1 = __importDefault(require("../controllers/itemController"));
class ItemRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', itemController_1.default.list);
        this.router.get('/pantalones', itemController_1.default.listPantalones);
        this.router.get('/camisas', itemController_1.default.listCamisas);
        this.router.get('/:id', itemController_1.default.getOne);
        this.router.post('/', itemController_1.default.create);
        this.router.put('/:id', itemController_1.default.update);
        this.router.delete('/:id', itemController_1.default.delete);
    }
}
const itemRoutes = new ItemRoutes();
exports.default = itemRoutes.router;
