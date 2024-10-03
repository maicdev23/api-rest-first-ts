import { Request, Response } from "express"
import { editUser, findUser, findUsers, removeUser, saveUser } from "../services/user.service"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const data = await findUsers()
        return res.status(200).json(data)
    } catch (error: any) {
        return res.status(500).json({ msg: error.message })
    }
}

export const addUser = async ({ body }: Request, res: Response) => {
    try {
        const resp = await saveUser(body)

        if (resp === 'The user already exists') return res.status(409).json({ msg: resp })

        return res.status(200).json(resp)
    } catch (err: any) {
        return res.status(500).json({ msg: err.message })
    }
}

export const getUser = async ({ params }: Request, res: Response) => {
    try {
        const data = await findUser(params.id)
        return res.status(200).json(data)
    } catch (error: any) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateUser = async ({ params, body }: Request, res: Response) => {
    try {
        const data = await editUser(params.id, body)
        return res.status(200).json(data)
    } catch (error: any) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteUser = async ({ params }: Request, res: Response) => {
    try {
        const data = await removeUser(params.id)
        return res.status(200).json(data)
    } catch (error: any) {
        return res.status(500).json({ msg: error.message })
    }
}