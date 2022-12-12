import axios from '../services/axios.service'

export const root = (req, res) => {
    res.status(200).json({status: 'OK', message: `Hi! your ${process.env.SERVICE_NAME} service is working.`})
}

export const healthcheck = (req, res) => {
    const data = {
        uptime: process.uptime(),
        response_time: req.headers.resTime,
        message: 'ok',
    }
    res.status(200).send(data);
}

export const currency = (req, res) => {
    axios.get(`https://restcountries.com/v3.1/currency/${req.body.currency}`)
    .then(resCurrency => {
        res.send(resCurrency.data)
    })
    .catch(err => {
        console.log(err)
    })
}