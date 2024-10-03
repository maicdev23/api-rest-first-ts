import { encrypt } from "../helpers/bcrypt"
import { IUser } from "../interfaces"
import UserModel from "../models/user.model"

export const findUsers = async () => {
    const users = await UserModel.find()
    return users
}

export const saveUser = async ({ fullname, username, password, role }: IUser) => {

    const existe = await UserModel.findOne({ username: username })

    if (existe) return 'The user already exists'

    const data = new UserModel({ fullname, username, password, role })
    data.password = await encrypt(password)
    const user = await data.save();

    return { msg: `User added successfully`, user }
}

export const findUser = async (userId: String) => {
    const user = await UserModel.findById(userId)
    return user
}

export const editUser = async (userId: String, userData: IUser) => {
    const user = await UserModel.findByIdAndUpdate(userId, userData, { new: true })
    return { msg: `User ${user?.username} updated successfully` }
}

export const removeUser = async (userId: String) => {
    const user = await UserModel.findByIdAndDelete(userId)
    return { msg: `User ${user?.username} deleted successfully` }
}