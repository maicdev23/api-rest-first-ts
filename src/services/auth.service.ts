import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model'
import { IAuth } from "../interfaces";
import { decrytp } from "../helpers/bcrypt";

export const login = async ({username, password}: IAuth) => {
    const user = await UserModel.findOne({username: username})
    if(!user) return 'User not found'

    const compare = await decrytp(password, user.password)
    if(!compare) return 'Password is not valid'

    const token: string = jwt.sign({_id: user._id}, <string>process.env.JWT, { expiresIn: '1h' })

    return { msg: 'Bienvenido', token, auth: true }
}

export const index = async (userId: String) => {
    const user = await UserModel.findById(userId, { password: 0 })
    return user
}