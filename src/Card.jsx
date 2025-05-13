import { NavLink } from "react-router";
import { useState } from "react";

export default function Card({tittle, text, direction, icon}) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <NavLink to={direction}>
          <div 
            className={`w-full h-full bg-gray-800 rounded-xl transition-all duration-300
            ${isHovered ? 'transform -translate-y-2 shadow-xl shadow-blue-500/20' : 'shadow-lg shadow-black/30'}
            flex flex-col p-6 border border-gray-700 relative overflow-hidden group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >  
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
             
             <div className="text-5xl mb-4">{icon}</div>
             
             <h2 className="text-neutral-100 text-2xl font-bold mb-2">{tittle}</h2>
             <p className="text-gray-400 text-base">{text}</p>
             
             <div className={`mt-4 flex items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
               <span className="text-blue-400 mr-2">Ver soluciones</span>
               <span className="text-blue-400">→</span>
             </div>
          </div>
        </NavLink>
    )
}

export function Credits(){
  return(
    <footer className="w-full py-8 px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Tech Solve</h2>
            <p className="text-gray-400">© 2025 TechSolve - Soluciones Informáticas</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300 font-semibold mb-1">Enlaces</h3>
            <div className="flex gap-6">
              <ul className="text-gray-500 flex flex-col gap-1">
                <li className="hover:text-blue-400 transition-colors">
                  <a href="#" className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Sobre Nosotros
                  </a>
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  <a href="#" className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Contacto
                  </a>
                </li>
              </ul>
              <ul className="text-gray-500 flex flex-col gap-1">
                <li className="hover:text-blue-400 transition-colors">
                  <a href="#" className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> FAQ
                  </a>
                </li>
                <li className="hover:text-blue-400 transition-colors">
                  <a href="#" className="flex items-center gap-2">
                    <span className="text-blue-500">•</span> Políticas de privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span className="text-white">X</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span className="text-white">f</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span className="text-white">in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}