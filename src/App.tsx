import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routeList} from './routes/route-list'
import {PermissionRoute} from './routes/route-permission'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {routeList.map((item) => (
               <Route
                  key={item.path?.toString()}
                  path={item.path}
                  element={<PermissionRoute {...item} />}
               />
            ))}
         </Routes>
      </BrowserRouter>
   )
}

export default App
