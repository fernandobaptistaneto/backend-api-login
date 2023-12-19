"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source/data-source");
const Users_1 = require("../entities/Users");
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
class UserController {
    async login(req, res) {
        try {
            const repo = data_source_1.AppDataSource.getRepository(Users_1.Users);
            const user = await repo.find();
            console.log('object', user);
            return res.json({ message: 'ok', data: user }).status(200);
        }
        catch (error) {
            return res.json({ message: error }).status(500);
        }
    }
    setRoutes(routes) {
        routes.get('/users/login', this.login);
    }
}
exports.default = new UserController();
//# sourceMappingURL=UsersController.js.map