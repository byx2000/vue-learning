import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    })

    return instance(config)
}