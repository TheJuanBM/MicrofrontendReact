"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const config_1 = require("../config");
const routes_1 = __importDefault(require("../routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = config_1.ENV.PORT;
        this.routes();
        this.middlewares();
    }
    middlewares() {
        this.app.use((0, cors_1.default)({
            credentials: true,
            origin: [config_1.ENV.CORS_ALLOW],
            optionsSuccessStatus: 200,
            allowedHeaders: ['Content-Type', 'Authorization']
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use('/api', (0, cors_1.default)(), routes_1.default);
    }
    start() {
        this.app.listen(this.port, () => console.log(`Running in the port ${this.port}`));
    }
}
exports.Server = Server;
