import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {

    fullname: string;

    role: string;

}