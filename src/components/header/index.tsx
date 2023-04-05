import Logo from '../logo'
import Actions from './actions'
import Navbar from './navbar'

function Header() {
   return (
      <div className="flex h-16 justify-around">
         <Logo />
         <Navbar />
         <Actions />
      </div>
   )
}

export default Header
