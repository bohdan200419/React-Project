import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(response =>{
    response.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWQ4MDI2MmE5MTY2NThiYTQ2YmVlNmJmMWVkYzgxYSIsInN1YiI6IjY0NWU4YWQ2ZWY4YjMyMDBlMzVjZmY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WsYjAqi5Im130_GBztBs4zGTnYVgdi7UX8udupzGlqw'
    return response
})

export {axiosService}