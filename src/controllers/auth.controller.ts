import { Request, Response } from "express";
import { index, login } from "../services/auth.service";

export const auth = async ({ body }: Request, res: Response) => {
    try {
        const respuesta = await login(body)

        if (respuesta === 'User not found') return res.status(403).json({ msg: respuesta })

        if (respuesta === 'Password is not valid') return res.status(403).json({ msg: respuesta })

        return res.status(200).json(respuesta)
    } catch (err: any) {
        return res.status(500).json({ msg: err.message })
    }
}

export const main = async (req: Request, res: Response) => {
    try {
        const user = await index(req.userId)
        return res.status(200).json(user)
    } catch (err: any) {
        return res.status(500).json({ msg: err.message })
    }
}