import Cookies from 'js-cookie'

const getCookiesId = () => {
   return Cookies.get('accessToken') || ''
}

const setCookiesId = (token: string) => {
   Cookies.set('accessToken', token)
}

const removeCookiesId = () => {
   Cookies.remove('accessToken')
}

const getSessionId = () => {
   return sessionStorage.getItem('accessToken') || ''
}

const setSessionId = (token: string) => {
   sessionStorage.setItem('accessToken', token)
}

const removeSessionId = () => {
   sessionStorage.removeItem('accessToken')
}

const getLocalUserInfo = () => {
   return localStorage.getItem('userInfo')
}

export const STORAGE = {
   getCookiesId,
   setCookiesId,
   removeCookiesId,
   getSessionId,
   setSessionId,
   removeSessionId,
   getLocalUserInfo,
}
