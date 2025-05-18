import { useState, useEffect } from "react";
import { Credits } from "./Card";
import Navbar from "./Navbar";

function Hardware() {
    const [isLoading, setIsLoading] = useState(true);
    const [activo, setActivo] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);
    
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
                <div className="text-5xl text-blue-400 mb-6 animate-pulse">Hardware</div>
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    const elementos = [
        {
            titulo: 'La computadora no enciende (Sin luces ni ventiladores funcionando)',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                        <h4 className="text-red-400 font-semibold mb-2">Posibles Causas:</h4>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Fuente de poder dañada o desconectada</li>
                            <li>• Cable de alimentación defectuoso</li>
                            <li>• Botón de encendido averiado</li>
                            <li>• Placa madre dañada</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Soluciones:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1.</strong> Verifica que el cable esté bien conectado</li>
                            <li><strong>2.</strong> Prueba con otro cable de alimentación</li>
                            <li><strong>3.</strong> Verifica el interruptor de la fuente (I/O)</li>
                            <li><strong>4.</strong> Prueba conectando solo lo esencial</li>
                        </ol>
                    </div>
                </div>
            ),
            icon: "⚡",
            color: "red"
        },
        {
            titulo: 'La computadora enciende, pero no da imagen',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                        <h4 className="text-orange-400 font-semibold mb-2">Posibles Causas:</h4>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Tarjeta gráfica mal conectada o dañada</li>
                            <li>• Monitor desconectado o dañado</li>
                            <li>• RAM mal instalada o defectuosa</li>
                            <li>• Cable de video dañado</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Soluciones:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1.</strong> Verifica conexiones del monitor</li>
                            <li><strong>2.</strong> Prueba con otro cable de video</li>
                            <li><strong>3.</strong> Reinicia la RAM (quitar y volver a instalar)</li>
                            <li><strong>4.</strong> Prueba con un solo módulo de RAM</li>
                        </ol>
                    </div>
                </div>
            ),
            icon: "🖥️",
            color: "orange"
        },
        {
            titulo: 'La PC se apaga sola o se reinicia constantemente',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                        <h4 className="text-yellow-400 font-semibold mb-2">Posibles Causas:</h4>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Sobrecalentamiento del procesador</li>
                            <li>• Fuente de poder insuficiente o defectuosa</li>
                            <li>• RAM defectuosa</li>
                            <li>• Virus o malware</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Soluciones:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1.</strong> Limpia ventiladores y revisa temperaturas</li>
                            <li><strong>2.</strong> Verifica que la fuente sea adecuada</li>
                            <li><strong>3.</strong> Ejecuta pruebas de memoria (MemTest86)</li>
                            <li><strong>4.</strong> Escanea en busca de virus</li>
                        </ol>
                    </div>
                </div>
            ),
            icon: "🔥",
            color: "yellow"
        },
        {
            titulo: 'La laptop no carga o la batería no dura nada',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                        <h4 className="text-purple-400 font-semibold mb-2">Posibles Causas:</h4>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Cargador defectuoso o incompatible</li>
                            <li>• Batería agotada o dañada</li>
                            <li>• Puerto de carga sucio o dañado</li>
                            <li>• Problema en el circuito de carga</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Soluciones:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1.</strong> Prueba con otro cargador compatible</li>
                            <li><strong>2.</strong> Limpia el puerto de carga con aire comprimido</li>
                            <li><strong>3.</strong> Calibra la batería (descarga completa + carga)</li>
                            <li><strong>4.</strong> Verifica configuración de energía en Windows</li>
                        </ol>
                    </div>
                </div>
            ),
            icon: "🔋",
            color: "purple"
        },
        {
            titulo: 'El teclado o mouse no responden',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                        <h4 className="text-green-400 font-semibold mb-2">Posibles Causas:</h4>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Conexión USB suelta o puerto dañado</li>
                            <li>• Controladores desactualizados o corruptos</li>
                            <li>• Dispositivo inalámbrico sin batería</li>
                            <li>• Conflicto de software</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Soluciones:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1.</strong> Desconecta y vuelve a conectar el dispositivo</li>
                            <li><strong>2.</strong> Prueba en otro puerto USB</li>
                            <li><strong>3.</strong> Actualiza controladores en Administrador de dispositivos</li>
                            <li><strong>4.</strong> Reinicia en modo seguro para descartar conflictos</li>
                        </ol>
                    </div>
                </div>
            ),
            icon: "⌨️",
            color: "green"
        },
        {
            titulo: 'El disco duro o SSD no es reconocido',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded">
                        <h4 className="text-indigo-400 font-semibold mb-2">Posibles Causas:</h4>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Cables SATA sueltos o dañados</li>
                            <li>• Disco duro dañado o en fallo</li>
                            <li>• Configuración incorrecta en BIOS</li>
                            <li>• Problema de alimentación</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Soluciones:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1.</strong> Verifica conexiones SATA y de poder</li>
                            <li><strong>2.</strong> Prueba con otros cables SATA</li>
                            <li><strong>3.</strong> Revisa configuración en BIOS/UEFI</li>
                            <li><strong>4.</strong> Verifica en Administración de discos (diskmgmt.msc)</li>
                        </ol>
                    </div>
                </div>
            ),
            icon: "💾",
            color: "indigo"
        }
    ];

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    const colorClasses = {
        red: "from-red-500 to-red-600",
        orange: "from-orange-500 to-orange-600",
        yellow: "from-yellow-500 to-yellow-600",
        purple: "from-purple-500 to-purple-600",
        green: "from-green-500 to-green-600",
        indigo: "from-indigo-500 to-indigo-600"
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
            <header className="w-full p-5 gap-4 bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800 flex flex-row items-center mb-10 sticky top-0 z-10">
                <Navbar />
                <div className='flex flex-col'>
                    <span className='text-5xl text-blue-400 font-bold tracking-wider'>Hardware</span>
                    <span className='text-2xl text-gray-400'>Componentes físicos, periféricos y conexiones</span>
                </div>
            </header>
            
            <main className="flex-grow px-6 max-w-7xl mx-auto w-full">
                <section className="mb-8">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Problemas Comunes de Hardware</h2>
                        <div className="absolute -bottom-2 left-0 w-120 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                        {elementos.map((item, index) => (
                            <AccordionItem
                                key={index}
                                item={item}
                                index={index}
                                isActive={activo === index}
                                onToggle={() => toggle(index)}
                                colorClass={colorClasses[item.color]}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Herramientas Útiles</h2>
                        <div className="absolute -bottom-2 left-0 w-40 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-blue-400 text-3xl mr-4">🔧</div>
                                <h3 className="text-2xl text-white font-semibold">Software de Diagnóstico</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <p className="text-gray-300">CPU-Z: Información detallada del hardware</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <p className="text-gray-300">HWiNFO: Monitoreo completo del sistema</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 font-bold">•</span>
                                    <p className="text-gray-300">CrystalDiskInfo: Estado de discos duros</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-green-400 text-3xl mr-4">🛡️</div>
                                <h3 className="text-2xl text-white font-semibold">Mantenimiento Preventivo</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Limpieza regular de ventiladores</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Monitoreo de temperaturas</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Verificación periódica de conexiones</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            
            <Credits />
        </div>
    );
}

function AccordionItem({ item, index, isActive, onToggle, colorClass }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`bg-gray-800 rounded-xl border border-gray-700 transition-all duration-300 overflow-hidden
            ${isHovered ? 'shadow-xl shadow-blue-500/10' : 'shadow-lg shadow-black/30'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`w-full h-1 bg-gradient-to-r ${colorClass}`}></div>
            
            <button
                className="w-full text-left px-6 py-4 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
                onClick={onToggle}
            >
                <div className="flex items-center gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                        <span className="text-lg font-semibold">{index + 1}.</span>
                        <span className="text-lg ml-2">{item.titulo}</span>
                    </div>
                </div>
                <div className={`text-blue-400 text-2xl transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}>
                    ↓
                </div>
            </button>
            
            {isActive && (
                <div className="px-6 py-6 bg-gray-900 border-t border-gray-700 animate-slideDown">
                    {item.contenido}
                </div>
            )}
        </div>
    );
}

export default Hardware;