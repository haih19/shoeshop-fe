import {Navigate} from 'react-router-dom'
import {IRoutePermission} from './types'
import {AppRoutes} from './route-constants'
import {STORAGE} from '../helper/storage'

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
   const isAuthenticated = STORAGE.getSessionId() || STORAGE.getCookiesId()
   if (!isAuthenticated && isPrivate)
      return (
         <Navigate
            to={AppRoutes.logIn}
            replace
         />
      )
   return <RouteComponent {...props} />
}
