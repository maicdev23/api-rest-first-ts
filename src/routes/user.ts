import { Router } from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller";
import { authorization, validateAdmin, validateToken } from "../middlewares/verifyAuth";

const user: Router = Router()

user.post('/admin', [validateToken, validateAdmin], addUser)

user.route('/user')
    .get(getUsers)
    .post(addUser)

user.route('/user/:id')
    .get([validateToken, authorization], getUser)
    .put([validateToken, authorization], updateUser)
    .delete([validateToken, authorization], deleteUser)

export default user