import { NavLink } from "react-router";

export default function Card({tittle, text, direction}){
    return(
        <>
          <NavLink to= {direction}>
          <div className='w-150 h-45 bg-neutral-200 shadow-gray-400 shadow-lg
          rounded-2xl flex justify-center item-center p-4 flex-col'>  
             <h1 className="text-neutral-900 text-3xl">{tittle}</h1>
             <p className="text-neutral-700 text-lg">{text}</p>
          </div>
          </NavLink>
        </>
    )
}

export function Credits(){
  return(
    <>
    <section className='flex justify-around flex-row fixed bottom-2 left-0 h-10 w-full bg-black'>
        <p className='text-white flex mr-100'>© 2025 TechSolve - Soluciones Informáticas</p>
        <ul className='text-white flex flex-row gap-4'>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
          <li>Políticas de privacidad</li>
        </ul>
      </section>
    </>
  )
}