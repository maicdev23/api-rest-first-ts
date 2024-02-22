import mongoose from "mongoose";

export const dbconnection = async () => {
    try{
        await mongoose.set('strictQuery', false).connect(<string>process.env.MONGO_URI)
        console.log('Conexion exitosa con la base de datos')
    }catch(err){
        console.log('Error de conexion con database' + err)
    }
}