import { Router } from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controller";

const user: Router = Router()

user.route('/user')
    .get(getUsers)
    .post(addUser)
    
user.route('/user/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

export default user