"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
var jwt = require('jsonwebtoken');
const cors = require("cors");
const routes_1 = require("./routes");
require("reflect-metadata");
const data_source_1 = require("./data-source/data-source");
class App {
    constructor() {
        this.app = express();
    }
    async startApp() {
        data_source_1.AppDataSource.initialize().then(async () => {
            this.app.listen(process.env.APP_PORT || 3000, () => {
                this.middlewares();
                this.routes();
                console.log(`Server rodando ${process.env.APP_PORT} `);
            });
        }).catch((e) => {
            console.log(e);
        });
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes() {
        this.app.use(routes_1.default);
    }
}
exports.default = new App;
//# sourceMappingURL=app.js.map