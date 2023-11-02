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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const item_service_1 = require("../service/item.service");
router.post("/addlist", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { item } = req.body;
        if (!item) {
            res.status(422).json({ "error": "please fill all fields" });
        }
        else {
            const expData = yield (0, item_service_1.Addlist)({ item });
            if (expData) {
                res.status(201).json({ "message": "Sucessfully Save" });
            }
            res.status(422).json({ "error": " failed to add" });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
router.get("/getlist", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getlst = yield (0, item_service_1.Getlist)();
        if (getlst) {
            res.status(201).json(getlst);
        }
        res.status(422).json({ "error": "not found" });
    }
    catch (err) {
        console.log(err);
    }
}));
router.delete('/deleteitem/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deldata = yield (0, item_service_1.deleteItem)(req.params.id);
        console.log(deldata);
        if (deldata) {
            console.log(deldata);
            res.status(201).json(deldata);
        }
        res.status(204).json({ "error": "not found" });
    }
    catch (error) {
        console.log(error);
    }
}));
module.exports = router;
