import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL
const access_token = localStorage.getItem('access_token')

const request = axios.create({
   baseURL: baseUrl,
   headers: {
      Authorization: `Bearer ${access_token}`,
   },
})

request.interceptors.request.use(async (config) => config)

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
