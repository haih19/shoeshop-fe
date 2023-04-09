import {AuthLayout} from '../layout/authLayout'
import {MainLayout} from '../layout/mainLayout'
import {LoginPage} from '../page/auth/login'
import {RegisterPage} from '../page/auth/signup'
import CategoryPage from '../page/category'
import HomePage from '../page/home'
import {AppRoutes} from './route-constants'

export const routeList = [
   {
      path: AppRoutes.home,
      component: HomePage,
      layout: MainLayout,
      isPrivate: true,
   },
   {
      path: AppRoutes.categories.list,
      component: CategoryPage,
      layout: MainLayout,
      isPrivate: true,
   },
   {
      path: AppRoutes.login,
      component: LoginPage,
      layout: AuthLayout,
      isPrivate: false,
   },
   {
      path: AppRoutes.signup,
      component: RegisterPage,
      layout: AuthLayout,
      isPrivate: false,
   },
]
