const express = require('express')
var jwt = require('jsonwebtoken')
import * as cors from 'cors'
import routes from './routes'
import 'reflect-metadata'
import { appDataSource } from './DataSource/DataSource'


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
    }

    private routes(): void {
        this.app.use(routes)
    }

}

export default new App