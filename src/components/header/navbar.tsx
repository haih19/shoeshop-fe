import {Link} from 'react-router-dom'
import {AppRoutes} from '../../routes/route-constants'

function Navbar() {
   const navItems = [
      {title: 'Home', path: AppRoutes.home},
      {title: 'Category', path: AppRoutes.categories.list},
      {title: 'Contact', path: AppRoutes.contact},
      {title: 'Cart', path: AppRoutes.cart},
   ]
   return (
      <ul className="flex items-center">
         {navItems.map((item, index) => (
            <Link
               className="uppercase text-base font-medium mr-8 inline-block hover:underline"
               to={item.path}
               key={index}>
               {item.title}
            </Link>
         ))}
      </ul>
   )
}

export default Navbar
