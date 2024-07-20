import { Schema, model } from "mongoose";
import { IUser } from "../interfaces";

const SchemaUser = new Schema<IUser>(
    {
        fullname: { type: String, trim: true, uppercase: true, default: 'Change Fullname' },

        username: { type: String, trim: true },

        password: { type: String, trim: true }
    },
    {
        versionKey: false,
    }
)

export default model('collectionUser', SchemaUser)