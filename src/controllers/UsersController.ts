import { Request, Response, Router } from 'express'
import { Users } from '../entity/Users'
import { appDataSource } from "../data-source/data-source";
const crypto = require('crypto')
var jwt = require('jsonwebtoken')

class UserController {

    public async login(req: Request, res: Response): Promise<Response> {

        try {

            const UserRepository = appDataSource.getRepository(Users)

            const user = await UserRepository.find()

            console.log('object', user);

            return res.json({ message: 'ok', data: user }).status(200)

        } catch (error) {
            return res.json({ message: error}).status(500)
        }
    }


    public setRoutes(routes: Router) {
        routes.get('/users/login', this.login)
    }
}


export default new UserController()