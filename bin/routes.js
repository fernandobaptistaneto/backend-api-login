"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = require("./controllers/UsersController");
const routes = (0, express_1.Router)();
UsersController_1.default.setRoutes(routes);
exports.default = routes;
//# sourceMappingURL=routes.js.map