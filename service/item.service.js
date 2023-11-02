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
exports.deleteItem = exports.Getlist = exports.Addlist = void 0;
const listSchema_1 = __importDefault(require("../model/listSchema"));
function Addlist(item) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield listSchema_1.default.create(item);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.Addlist = Addlist;
function Getlist() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield listSchema_1.default.find();
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.Getlist = Getlist;
function deleteItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield listSchema_1.default.deleteOne({ _id: id });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteItem = deleteItem;
