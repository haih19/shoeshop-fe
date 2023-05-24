import {useEffect} from 'react'
import apiServices from '../../services/api.services'

export const HomeWrapper = () => {
   const getAllCategories = async () => {
      const response = await apiServices.getCategoryList()
      console.log(response)
   }

   useEffect(() => {
      getAllCategories()
   }, [])
   return <div>home page</div>
}
