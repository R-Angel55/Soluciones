import { useState, useEffect } from 'react'
import './App.css'
import { NavLink } from 'react-router'
import Card, { Credits } from './Card'
import Navbar from './Navbar'



function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      id: 1,
      tittle: "Hardware",
      text: "Problemas con componentes físicos, periféricos y conexiones.",
      direction: "/hardware",
      icon: "💻"
    },
    {
      id: 2,
      tittle: "Software",
      text: "Problemas con programas, aplicaciones y sistemas operativos.",
      direction: "/software",
      icon: "🖥️"
    },
    {
      id: 3,
      tittle: "Mantenimiento",
      text: "Consejos para realizar mantenimiento preventivo y para mantener tu equipo en óptimas condiciones",
      direction: "/mantenimiento",
      icon: "🔧"
    },
    {
      id: 4,
      tittle: "Soluciones Rápidas",
      text: "Problemas comunes o frecuentes con soluciones rápidas y sencillas",
      direction: "/comunes",
      icon: "⚡"
    }
  ]

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="text-5xl text-blue-400 mb-6 animate-pulse">Tech Solve</div>
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <header className="w-full p-5 gap-4 bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800 flex flex-row items-center mb-10 sticky top-0 z-10">
        <Navbar />
        <div className='flex flex-col'>
          <span className='text-5xl text-blue-400 font-bold tracking-wider'>Tech Solve</span>
          <span className='text-2xl text-gray-400'>Soluciones a problemas comunes en hardware y software</span>
        </div>
      </header>
      
      <main className="flex-grow px-6 max-w-7xl mx-auto w-full">
        <div className='w-full flex flex-row justify-between mb-10 items-center'>
          <div className="relative">
            <h2 className='text-4xl text-white font-bold'>Categorías</h2>
            <div className="absolute -bottom-2 left-0 w-45 h-1 bg-blue-500 rounded-full"></div>
          </div>
          <div className='bg-blue-500 bg-opacity-20 w-64 h-12 rounded-lg border border-blue-500 border-opacity-30 flex items-center justify-center'>
            <span className="text-blue-400">Encuentra soluciones rápidas</span>
          </div>
        </div>
        
        <section className='grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24'>
          {cards.map(card => (
            <Card 
              key={card.id} 
              direction={card.direction} 
              tittle={card.tittle} 
              text={card.text}
              icon={card.icon} 
            />
          ))}
        </section>
      </main>

      <Credits />
    </div>
  )
}

export default App;
