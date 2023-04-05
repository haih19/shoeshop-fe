import {RegisterPage} from '../page/auth/signup'
import {LoginPage} from './../page/auth/login'
import HomePage from '../page/home'
import DetailPage from '../page/detail'
import ContactPage from '../page/contact'
import CategoryPage from '../page/category'
import {MainLayout} from '../layout/mainLayout'
import {AuthLayout} from '../layout/authLayout'

export const routeList = [
   {path: '/', layout: MainLayout, component: HomePage},
   {path: '/category', layout: MainLayout, component: CategoryPage},
   {path: '/:category/:id', layout: MainLayout, component: DetailPage},
   {path: '/contact', layout: MainLayout, component: ContactPage},
   {path: '/login', layout: AuthLayout, component: LoginPage},
   {path: '/register', layout: AuthLayout, component: RegisterPage},
]
