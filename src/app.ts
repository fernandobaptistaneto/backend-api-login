const express = require('express')
var jwt = require('jsonwebtoken')
import * as cors from 'cors'
import routes from './routes'
import 'reflect-metadata'
import { appDataSource } from './DataSource/DataSource'
import { NextFunction, Request, Response } from 'express'
import { find } from 'lodash'


class App {
    public app = express()

    public async startApp() {
        appDataSource.initialize().then(async () => {
            this.app.listen(process.env.APP_PORT || 3000, () => {
                this.middlewares()
                this.routes()
                console.log(`Server rodando ${process.env.APP_PORT} `);
            })
        }).catch((e) => {
            console.log(e);
        })
    }

    private middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(this.authCheck)
    }

    private async authCheck(req: Request, res: Response, next: NextFunction) {
        try {
            let urlExceptions = ['/users/login']

            if (!urlExceptions.includes(req.path)) {
                const token = req.headers.authorization
                const path = req.path
                if (token) {
                    jwt.verify(token, process.env.SECRET)
                } else {
                    throw ('Token não foi fornecido.')
                }
            }
            next()
        } catch (error) {
            return res.json({ message: error })
        }
    }

    private routes(): void {
        this.app.use(routes)
    }

}

export default new App