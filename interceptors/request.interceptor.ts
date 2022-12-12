import logger from "../utils/logger"

const requestCapture = (req, res, next) => {
    try {
        logger.info('Request', {
            url: req.protocol + '://' + req.get('host') + req.originalUrl,
            request: req.body,
            trace_id: req.get('X-Trace-Id') || res.getHeader('X-Trace-Id')
        })
    } catch (err) {
        logger.error('Error', {
            url: req.protocol + '://' + req.get('host') + req.originalUrl,
            error_message: err,
            trace_id: req.get('X-Trace-Id') || res.getHeader('X-Trace-Id')
        })
    }
    next()
}

export default requestCapture