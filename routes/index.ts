import { Router } from 'express'

import * as indexController from '../controller/index.controller'

const router = Router();

router.get('/', indexController.root)
router.get('/health', indexController.healthcheck)
router.post('/currency', indexController.currency)

export default router;