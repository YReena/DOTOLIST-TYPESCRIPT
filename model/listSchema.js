"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.default.Schema({
    item: {
        type: String
    }
});
// 3. Create a Model.
const ListItem = mongoose_1.default.model('DBLIST', userSchema);
exports.default = ListItem;
