import { Request, Response, Router } from 'express'
import { Users } from '../Entity/Users'
import { appDataSource } from "../data-source/data-source";
import CommonHelper from '../Helpers/CommonHelper';
var jwt = require('jsonwebtoken')


class UserController {

    public setRoutes(routes: Router) {
        routes.post('/users/login', this.login)
    }

    public async login(req: Request, res: Response): Promise<Response> {

        try {
            const user = await appDataSource.getRepository(Users).createQueryBuilder()
                .select('users')
                .from(Users, 'users')
                .where('users.username = :username and users.deleted::date = \'1970-01-01\'', { username: req.body.username })
                .getOne()

            if (!user) throw ('Usuário não encontrado!')

            if (user.password !== CommonHelper.createPasswordHash(req.body.password)) {
                throw ('Password Inválido!')
            }

            return res.json({ message: 'ok', data: user }).status(200)

        } catch (err) {
            return res.json({ message: err })
        }
    }
}


export default new UserController()