export default () => {
    return (req, res, next) => {
        if (req.get('X-Trace-Id') === undefined) {
            res.setHeader('X-Trace-Id', `DevOps-Interview-${new Date().valueOf()}`)
        } else {
            res.setHeader('X-Trace-Id', req.get('X-Trace-Id'))
        }
        
        next()
    } 
}