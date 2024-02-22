import { Router } from "express";

import auth from "./auth";

const router: Router = Router()

router.use('/api', auth)
router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Resource not found' });
})

export default router