import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    //baseURL: "http:////172.17.3.244:3000",
    timeout: 10000,
    headers: {
        "Content-Type":"application/json"
    }
})

export default api;