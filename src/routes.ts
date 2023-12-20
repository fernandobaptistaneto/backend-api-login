import { Router } from 'express'


import UserController from './Controllers/UsersController'

const routes = Router()

UserController.setRoutes(routes)

export default routes