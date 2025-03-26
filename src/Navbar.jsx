import { useState } from 'react'
import { NavLink } from 'react-router';

export default function Navbar(){
  const [mostrar, setmostrar] = useState(false);
    return(
        <>
        <button onClick={() => setmostrar(!mostrar)} className='bg-neutral-50 ml-3 h-7 w-4 rounded-lg text-white'>.</button>
        
        {mostrar && <aside className='w-1/13 h-screen md:block fixed top-0 left-0 bg-black group'>
              <ul className='group-hover:flex flex-col text-white justify-around h-1/2 hidden'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/hardware"}>Hardware</NavLink>
                <NavLink to={"/software"}>Software</NavLink>
                <NavLink to={"/mantenimiento"}>Mantenimiento</NavLink>
                <NavLink to={"/comunes"}>Soluciones Rápidas</NavLink>
              </ul>
              </aside>}
        </>
    )
}