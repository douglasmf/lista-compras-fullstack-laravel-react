import axios from "axios";


export const http = axios.create({
    baseURL: 'https://lista-compras-fullstack-laravel-react.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})