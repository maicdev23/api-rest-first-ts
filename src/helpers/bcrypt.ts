import { hash, compare } from "bcryptjs";

export const encrypt = async (password: string) => {
    const encrypt = await hash(password, 10)
    return encrypt
}

export const decrytp = async (pass: string, passHash: string) => {
    const match = await compare(pass, passHash)
    return match
}