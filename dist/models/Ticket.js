"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connections_1 = __importDefault(require("../data/connections"));
var ticketSchema = new connections_1.default.Schema({
    usuario: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        require: true
    },
});
exports.default = connections_1.default.model('ticket', ticketSchema);
