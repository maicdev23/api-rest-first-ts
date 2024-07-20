import { Router } from "express";

import { auth, main } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/verifyAuth";

const rutas: Router = Router()

rutas.get('/main', [validateToken], main)
rutas.post('/auth', auth)

export default rutas