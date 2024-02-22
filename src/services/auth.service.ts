import jwt from 'jsonwebtoken';
import ModelUser from '../models/user.model'
import { IUser, IAuth } from "../interfaces";
import { decrytp, encrypt } from "../helpers/bcrypt";

export const register = async ({fullname, username, password}: IUser) => {

    const existe = await ModelUser.findOne({ username: username})

    if(existe) return 'The user already exists'
        
    const data = new ModelUser({fullname, username, password})
    data.password = await encrypt(password)
    const user = await data.save();

    return { msg: `User registered successfully`, user }
}

export const login = async ({username, password}: IAuth) => {
    const user = await ModelUser.findOne({username: username})
    if(!user) return 'User not found'

    const compare = await decrytp(password, user.password)
    if(!compare) return 'Password is not valid'

    const token: string = jwt.sign({_id: user._id}, <string>process.env.JWT, { expiresIn: '1h' })

    return { msg: 'Bienvenido', token, auth: true }
}