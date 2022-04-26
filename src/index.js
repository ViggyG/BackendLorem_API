"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config({ path: __dirname + '/.env' });
const port = process.env.PORT_NUM;
const app = (0, express_1.default)();
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
