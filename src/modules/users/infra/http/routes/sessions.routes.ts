/* eslint-disable consistent-return */
import { Router } from 'express';
import SessionsController from '@modules/users/infra/http/controllers/SessionsController';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();
const sessionsController = new SessionsController();


sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
