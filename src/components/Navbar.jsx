import { NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <header className="header">
      <NavLink to='/' className='w-10 h-10 items-center justify-center flex font-bold shadow-md rounded-lg bg-white'>
        <p className="blue-gradient_text">HN</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-blue-500' : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects          
        </NavLink>

        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Contact          
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar