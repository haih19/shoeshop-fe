import request from './request'
import {ILoginParam, IRegisterParam} from '../types'

interface ILoginResponse {
   access_token: string
}
const login = async (param: ILoginParam) => {
   const res: ILoginResponse = await request.post('/auth/login', param)
   return res
}

const register = async (param: IRegisterParam) => {
   const res = await request.post('/auth/register', param)
   return res
}

const apiAuth = {login, register}

export default apiAuth
