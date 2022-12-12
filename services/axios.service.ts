import axios from "axios";

import logger from '../utils/logger'

axios.interceptors.request.use(config => {
    logger.info('request interceptor', {
        pm_trace_id: config.headers['X-Trace-Id'],
        url: config.url,
        method: config.method,
    })

    return config
}), error => {
    return Promise.reject(error)
}

axios.interceptors.response.use(response => {
    logger.info('response interceptor', {
        pm_trace_id: response.headers['X-Trace-Id'],
        url: response.config.url,
        method: response.config.method,
    })
    return response
}), error => {

    return Promise.reject(error)
}

export default axios