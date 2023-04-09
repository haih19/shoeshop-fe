import {Navigate} from 'react-router-dom'
import {IRoutePermission} from './types'
import {AppRoutes} from './route-constants'
import Cookies from 'js-cookie'

const RouteComponent = (props: IRoutePermission) => {
   const {layout: LayoutWrapper, component: Component, path, isPrivate} = props

   if (LayoutWrapper) {
      return (
         <LayoutWrapper>
            <Component />
         </LayoutWrapper>
      )
   }
   return <Component />
}

export const PermissionRoute = ({isPrivate = true, ...props}: IRoutePermission) => {
   const isAuthenticated = localStorage.getItem('accessToken')
   if (!isAuthenticated && isPrivate)
      return (
         <Navigate
            to={AppRoutes.login}
            replace
         />
      )
   return <RouteComponent {...props} />
}
