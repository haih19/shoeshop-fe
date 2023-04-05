import {AxiosResponse} from 'axios'
import request from './request'

const getCategoryList = async (): Promise<AxiosResponse> => {
   const res = await request.get('/api/v1/categories')
   return res
}

const getUserList = async (): Promise<AxiosResponse> => {
   const res = await request.get('/api/v1/users')
   return res
}

const getProductList = async (): Promise<AxiosResponse> => {
   const res = await request.get('/api/v1/products')
   return res
}

const getProductDetail = async (id: number): Promise<AxiosResponse> => {
   const res = await request.get(`/api/v1/products/${id}`)
   return res
}

const getOrderList = async (): Promise<AxiosResponse> => {
   const res = await request.get('/api/v1/orders')
   return res
}

const getRatingList = async (): Promise<AxiosResponse> => {
   const res = await request.get('/api/v1/ratings')
   return res
}

const apiServices = {
   getCategoryList,
   getUserList,
   getProductList,
   getProductDetail,
   getOrderList,
   getRatingList,
}

export default apiServices
