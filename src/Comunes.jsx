import { Credits } from "./Card";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Comunes(){
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);
    
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
                <div className="text-5xl text-blue-400 mb-6 animate-pulse">Soluciones Rápidas</div>
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
            <header className="w-full p-5 gap-4 bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800 flex flex-row items-center mb-10 sticky top-0 z-10">
                <Navbar />
                <div className='flex flex-col'>
                    <span className='text-5xl text-blue-400 font-bold tracking-wider'>Soluciones Rápidas</span>
                    <span className='text-2xl text-gray-400'>Problemas comunes o frecuentes</span>
                </div>
            </header>

            <main className="flex-grow px-6 max-w-7xl mx-auto w-full">
                <section className="mb-8">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Guías de Solución</h2>
                        <div className="absolute -bottom-2 left-0 w-60 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className='grid md:grid-cols-2 gap-6 mb-16'>
                        <SolutionCard 
                            title="Reinicio del Sistema" 
                            steps={[
                                "Guarda todos tus documentos abiertos",
                                "Cierra todas las aplicaciones",
                                "Reinicia tu computadora desde el menú de inicio",
                                "Espera a que el sistema se reinicie completamente"
                            ]}
                            icon="🔄"
                            color="blue"
                        />
                        
                        <SolutionCard 
                            title="Actualizar Controladores" 
                            steps={[
                                "Abre el Administrador de dispositivos",
                                "Localiza el dispositivo que necesita actualización",
                                "Haz click derecho y selecciona \"Actualizar controlador\"",
                                "Sigue las instrucciones en pantalla"
                            ]}
                            icon="🔌"
                            color="green"
                        />
                        
                        <SolutionCard 
                            title="PC Lenta" 
                            steps={[
                                "Cierra programas innecesarios (Ctrl + Shift + Esc → Finalizar Tareas).",
                                "Borra archivos temporales (Win + R → escribe %temp% → Eliminar todo).",
                                "Desactiva programas al inicio (Ctrl + Shift + Esc → Inicio → Deshabilitar)."
                            ]}
                            icon="🐢"
                            color="yellow"
                        />
                        
                        <SolutionCard 
                            title="Pantalla Azul" 
                            steps={[
                                "Reinicia en modo seguro (F8 o Shift + Reiniciar).",
                                "Actualiza los drivers (Desde el administrador de dispositivos).",
                                "Escanea errores del disco (ejecuta CMD como administrador → chkdsk /f /r + enter)."
                            ]}
                            icon="💀"
                            color="red"
                        />
                    </div>
                </section>
                
                <section className="mb-16">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Recursos Adicionales</h2>
                        <div className="absolute -bottom-2 left-0 w-40 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-400 text-3xl mr-4">💡</div>
                            <h3 className="text-2xl text-white font-semibold">Consejos Para Prevenir Problemas</h3>
                        </div>
                        
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <p className="text-gray-300">Mantén tu sistema operativo y aplicaciones actualizados regularmente</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <p className="text-gray-300">Utiliza un programa antivirus confiable y actualizado</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <p className="text-gray-300">Realiza respaldos periódicos de tu información importante</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <p className="text-gray-300">Evita instalar software de fuentes no confiables</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <p className="text-gray-300">Limpia el polvo de los componentes internos cada 6 meses</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <p className="text-gray-300">Reinicia el equipo al menos una vez por semana</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <Credits />
        </div>
    )
}

function SolutionCard({ title, steps, icon, color }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const colors = {
        blue: "from-blue-500 to-blue-600",
        green: "from-green-500 to-green-600",
        yellow: "from-yellow-500 to-yellow-600",
        red: "from-red-500 to-red-600"
    };
    
    const bgGradient = colors[color] || colors.blue;
    
    return (
        <div 
            className={`bg-gray-800 rounded-xl transition-all duration-300
            ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-blue-500/20' : 'shadow-lg shadow-black/30'}
            flex flex-col p-6 border border-gray-700 relative overflow-hidden`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${bgGradient}`}></div>
            
            <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">{icon}</div>
                <h2 className="text-2xl text-white font-bold">{title}</h2>
            </div>
            
            <ul className="text-gray-300 space-y-3">
                {steps.map((step, index) => (
                    <li key={index} className="flex gap-2">
                        <span className="text-blue-400 font-bold">{index + 1}.</span>
                        <span>{step}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
