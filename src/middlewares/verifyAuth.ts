import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export interface IPayload{ _id: string }

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-access-token')
    if (!token) return res.status(403).json({ msg: 'Access Denied' })
    try{
        const decode = jwt.verify(token, process.env.TOKEN_SECRET || 'TOKEN_SECRET') as IPayload
        req.userId = decode._id
        next()
    }catch(err){
        return res.status(403).json({ msg: 'Invalid token' })
    }
}