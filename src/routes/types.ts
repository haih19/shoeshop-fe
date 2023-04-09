export type IRoutePermission = {
   path?: string
   layout?: React.ElementType
   isPrivate?: boolean
   redirect?: string
   redirectPath?: string
   component: () => JSX.Element
}
