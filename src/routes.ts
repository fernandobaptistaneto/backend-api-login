import { Router } from 'express'


import UserController from './controllers/UsersController'

const routes = Router()

UserController.setRoutes(routes)

export default routes