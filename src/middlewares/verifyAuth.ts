import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import userModel from "../models/user.model";

export interface IPayload { _id: string }

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-access-token');
    if (!token) return res.status(403).json({ msg: 'Access Denied' })
    try {
        const decode = jwt.verify(token, <string>process.env.JWT) as IPayload
        req.userId = decode._id
        next()
    } catch (err: any) {
        return res.status(403).json({ msg: err.message })
    }
}

export const validateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userModel.findById(req.userId)

        if (user?.role !== 'admin') return res.status(403).json({ msg: 'Not authorizathed' })

        next()
    } catch (err: any) {
        return res.status(403).json({ msg: err.message })
    }
}

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userModel.findById(req.userId)

        if (user?.role === 'user' && user?._id.toString() !== req.params.id)
            return res.status(403).json({ msg: 'Not authorizathed' })

        next()
    } catch (err: any) {
        return res.status(403).json({ msg: err.message })
    }
}