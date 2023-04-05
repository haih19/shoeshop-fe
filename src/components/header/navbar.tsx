import {Link} from 'react-router-dom'

function Navbar() {
   const navItems = [
      {title: 'Home', path: '/'},
      {title: 'Category', path: '/category'},
      {title: 'Contact', path: '/category/1'},
      {title: 'Cart', path: '/contact'},
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
