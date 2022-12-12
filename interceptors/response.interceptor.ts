import mung from 'express-mung'
import logger from "../utils/logger"

const responseCapture = (body, req, res) => {
    try {
        logger.info('Response', {
            url: req.protocol + '://' + req.get('host') + req.originalUrl,
            response: body,
            trace_id: res.getHeader('X-Trace-Id')
        })
    } catch (err) {
        logger.error('Error', {
            url: req.protocol + '://' + req.get('host') + req.originalUrl,
            error_message: err,
            trace_id: res.getHeader('X-Trace-Id')
        })
    }
    
    // return body
}

export default mung.json(responseCapture)