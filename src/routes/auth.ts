import { Router } from "express";

import { index, signin, signup } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/verifyAuth";

const rutas: Router = Router()

rutas.get('/main', [ validateToken ], index)
rutas.post('/register', signup)
rutas.post('/auth', signin)

export default rutas