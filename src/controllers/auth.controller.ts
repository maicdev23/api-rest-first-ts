import { Request, Response } from "express";
import ModelUser from '../models/user.model'
import { login, register } from "../services/auth.service";

export const signup = async ({body}: Request, res:Response) => {
    try{
        const respuesta = await register(body)

        if(respuesta === 'The user already exists') return res.status(403).json({msg: respuesta})
        
        return res.json({msg: respuesta})
    }catch(err: any) {
        return res.status(500).json({msg: err.message})
    }
}

export const signin = async ({body}: Request, res:Response) => {
    try {
        const respuesta = await login(body)

        if(respuesta === 'User not found') return res.status(403).json({msg: respuesta})

        if(respuesta === 'Password is not valid') return res.status(403).json({msg: respuesta})

        return res.status(200).json(respuesta)
    } catch (err:any) {
        return res.status(500).json({msg: err.message})
    }
}

export const index = async (req: Request, res:Response) => {
    const user = await ModelUser.findById(req.userId, { password: 0})
    return res.status(200).json(user)
}