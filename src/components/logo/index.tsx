import {Link} from 'react-router-dom'

function Logo() {
   return (
      <Link
         className="hover:opacity-60 h-16 w-16"
         to="/">
         <img
            src="nike-logo.png"
            alt="logo"
         />
      </Link>
   )
}

export default Logo
