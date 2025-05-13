import { useState, useEffect } from 'react'
import { NavLink } from 'react-router';


export default function Navbar(){
  const [mostrar, setMostrar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <button 
        onClick={() => setMostrar(!mostrar)} 
        className={`bg-blue-500 ml-3 h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 ${scrolled ? 'shadow-lg' : ''}`}
        aria-label="Toggle navigation menu"
      >
        <span className="text-white text-xl">☰</span>
      </button>
      
      {mostrar && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
            onClick={() => setMostrar(false)}
          />
          <aside className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800 z-30 shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setMostrar(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="px-6 py-4">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Tech Solve</h2>
            </div>
            <nav>
              <ul className="flex flex-col text-gray-300 gap-1">
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `px-6 py-3 transition-all duration-200 ${isActive 
                      ? 'text-blue-400 bg-blue-900 bg-opacity-30 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-800 hover:text-blue-300'}`
                  }
                  end
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏠</span> Home
                  </div>
                </NavLink>
                <NavLink 
                  to="/hardware" 
                  className={({isActive}) => 
                    `px-6 py-3 transition-all duration-200 ${isActive 
                      ? 'text-blue-400 bg-blue-900 bg-opacity-30 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-800 hover:text-blue-300'}`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💻</span> Hardware
                  </div>
                </NavLink>
                <NavLink 
                  to="/software" 
                  className={({isActive}) => 
                    `px-6 py-3 transition-all duration-200 ${isActive 
                      ? 'text-blue-400 bg-blue-900 bg-opacity-30 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-800 hover:text-blue-300'}`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🖥️</span> Software
                  </div>
                </NavLink>
                <NavLink 
                  to="/mantenimiento" 
                  className={({isActive}) => 
                    `px-6 py-3 transition-all duration-200 ${isActive 
                      ? 'text-blue-400 bg-blue-900 bg-opacity-30 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-800 hover:text-blue-300'}`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔧</span> Mantenimiento
                  </div>
                </NavLink>
                <NavLink 
                  to="/comunes" 
                  className={({isActive}) => 
                    `px-6 py-3 transition-all duration-200 ${isActive 
                      ? 'text-blue-400 bg-blue-900 bg-opacity-30 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-800 hover:text-blue-300'}`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⚡</span> Soluciones Rápidas
                  </div>
                </NavLink>
              </ul>
            </nav>
            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-800">
              <div className="text-gray-500 text-sm">
                © 2025 TechSolve
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  )
}