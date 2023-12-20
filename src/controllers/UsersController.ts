import { Request, Response, Router } from 'express'
import { Users } from '../Entity/Users'
import { appDataSource } from "../DataSource/DataSource";
import CommonHelper from '../Helpers/CommonHelper';
import { each } from 'lodash'
const crypto = require('crypto')
var jwt = require('jsonwebtoken')
import * as moment from 'moment'


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

            let objUser = each(user, (v, k) => {
                if (k === 'password') delete user[k]
            })

            const refreshToken = `${objUser.id}-${moment().format('HHmmss')}-${crypto.randomBytes(24).toString('hex')}`

            let token = jwt.sign({ user: user, refreshToken }, process.env.SECRET, {
                expiresIn: process.env.TIME_TOKEN_EXPIRES
            })

            return res.json({ auth: token })

        } catch (err) {
            return res.json({ message: err })
        }
    }
}


export default new UserController()