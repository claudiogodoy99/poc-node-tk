"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(String((_a = process.env.MONGODB) !== null && _a !== void 0 ? _a : 'mongodb+srv://cgodoy:123@cluster0.jfqwo.mongodb.net/ticket?retryWrites=true&w=majority'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
exports.default = mongoose_1.default;
