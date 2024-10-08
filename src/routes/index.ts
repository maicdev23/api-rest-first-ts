import { Response, Router } from "express";

import auth from "./auth";
import user from "./user";

const router: Router = Router()

router.use('/api', auth, user)
router.use('*', (res: Response) => {
    return res.status(404).json({ message: 'Resource not found' });
})

export default router