"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ItemController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield database_1.default.query('SELECT * FROM items');
            res.json(items);
        });
    }
    listPantalones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield database_1.default.query('SELECT * FROM items WHERE linea= "Vestir"');
            res.json(items);
        });
    }
    listCamisas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield database_1.default.query('SELECT * FROM items WHERE linea = "Polo"');
            res.json(items);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const items = yield database_1.default.query('SELECT * FROM items WHERE id = ?', [id]);
            if (items.length > 0) {
                console.log('entro al ciclo');
                return res.json(items[0]);
            }
            res.status(404).json({ text: 'The item doesn´t exists' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO items set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Item Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE items set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'The item was update' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM items WHERE id = ?', [id]);
            res.json({ message: 'The item was deleted' });
        });
    }
}
const itemController = new ItemController();
exports.default = itemController;
