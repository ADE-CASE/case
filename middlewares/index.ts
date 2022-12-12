import { Router } from 'express'

import traceId from './traceid.middleware'

import requestInterceptor from '../interceptors/request.interceptor'
import responseInterceptor from '../interceptors/response.interceptor'

const router = Router()

router.use((req, res, next) => {
    res.removeHeader("X-Powered-By")
    res.setHeader(
        'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    )
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Strict-Transport-Security', 'max-age=31536000')
    
    next()
})

router.use(traceId())
router.use(requestInterceptor)
router.use(responseInterceptor)

export default router