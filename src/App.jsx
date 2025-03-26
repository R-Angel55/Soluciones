import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router'
import Card, { Credits } from './Card'
import Navbar from './Navbar'

function App() {
  let cards = [
    {
      tittle: "Hardware",
      text: "Problemas con componentes físicos, periféricos y conexiones.",
      direction: "./hardware"
    },
    {
      tittle: "Software",
      text: "Problemas con programas, aplicaciones y sistemas operativos.",
      direction: "./software"
    },
    {
      tittle: "Mantenimiento",
      text: "Guía para realizar mantenimiento preventivo a y mantener tu equipo en óptimas condiciones",
      direction: "./mantenimiento"
    },
    {
      tittle: "Soluciones Rápidas",
      text: "Problemas comunes o frecuentes con soluciones rápidas sencillas",
      direction: "./comunes"
    }
  ]

  return (
    <>
      <div className="w-full p-5 gap-4 bg-black flex flex-row items-left mb-10 mt-3">
      <div className='flex'><Navbar /></div>
      <div className='w-full flex flex-col items-left'>
        <span className='text-5xl text-neutral-50'>Tech Solve</span>
        <span className='text-2xl text-gray-600'>Soluciones a problemas comunes en hardware y software</span>
      </div>
      </div>
      
      <div className='w-full flex flex-row justify-between ml-3 mr-3 p-4 '>
        <section className='flex text-4xl'>Categorías</section>
        <section className='bg-gray-500 mr-15 w-260 h-12' />
      </div>
      <section className='grid md:grid-cols-2 w-325 gap-5 ml-3'>
      {cards.map(function(card){
          return(
            <Card key={card.id} direction={card.direction} tittle={card.tittle} text={card.text} />
          )
        })}
      </section>

     <Credits />

    </>
  )
}
export default App
