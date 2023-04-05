import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routeList} from './routes'
import apiAuth from './services/api.auth'
import {useEffect} from 'react'
import apiServices from './services/api.services'

function App() {
   const demoFetch = async () => {
      try {
         const res = await apiServices.getCategoryList()
         console.log(res)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      demoFetch()
   }, [])
   return (
      <BrowserRouter>
         <Routes>
            {routeList.map((route, index) => {
               const Layout = route.layout
               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={
                        <Layout>
                           <route.component />
                        </Layout>
                     }
                  />
               )
            })}
         </Routes>
      </BrowserRouter>
   )
}

export default App
