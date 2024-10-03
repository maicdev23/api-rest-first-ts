import { Schema, model } from "mongoose";
import { IUser } from "../interfaces";

const roles = ['user', 'admin',]

const SchemaUser = new Schema<IUser>(
    {
        fullname: { type: String, trim: true, uppercase: true, default: 'Change Fullname' },

        username: { type: String, trim: true },

        password: { type: String, trim: true },

        role: {
            type: String, enum: roles, default: 'user', required: true
        }
    },
    {
        versionKey: false,
    }
)

export default model('collectionUser', SchemaUser)