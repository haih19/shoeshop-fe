import axios from 'axios'
import {STORAGE} from '../helper/storage'

const baseUrl = import.meta.env.VITE_API_URL

const request = axios.create({
   baseURL: baseUrl,
})

request.interceptors.request.use(async (config: any) => {
   const token = STORAGE.getCookiesId() || STORAGE.getSessionId()
   config.headers.Authorization = `Bearer ${token}`
   return config
})

request.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data
      }

      return response
   },
   (error) => {
      throw error
   }
)

export default request
