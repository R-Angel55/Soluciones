import { useState, useEffect } from "react";
import { Credits } from "./Card";
import Navbar from "./Navbar";

export default function Software (){
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
                <div className="text-5xl text-blue-400 mb-6 animate-pulse">Software</div>
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    } 

    const elementos = [
        {
            titulo: 'Windows no arranca correctamente (Se queda en pantalla negra o en bucle de reinicio)',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                        <h4 className="text-blue-400 font-semibold mb-2">Solución:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1. Arrancar en Modo Seguro:</strong></li>
                            <ul className="ml-3">
                                <li>• Apaga la PC forzadamente (mantén presionado el botón de encendido).</li>
                                <li>• Enciéndela y cuando aparezca el logo de Windows, apágala de nuevo (repite 3 veces hasta que aparezca el modo de recuperación).</li>
                                <li>• Ve a Opciones avanzadas → Configuración de inicio → Habilitar modo seguro.</li>
                            </ul>
                            <li><strong>2. Restaurar sistema:</strong></li>
                            <ul className="ml-3">
                                <li>• En el menú de recuperación, selecciona Opciones avanzadas → Restaurar sistema y elige un punto anterior.</li>
                            </ul>
                            <li><strong>3. Reparar inicio</strong></li>
                            <ul className="ml-3">
                                <li>• En el menú de recuperación, selecciona Opciones avanzadas → Reparación de inicio.</li>
                            </ul>
                            <li><strong>4. Reinstalar Winsows sin perder archivos</strong></li>
                            <ul className="ml-3">
                                <li>• Descarga una imagen ISO de Windows desde la web oficial de Microsoft.</li>
                                <li>• Arranca desde un USB booteable y selecciona "Actualizar" en la instalación.</li>
                            </ul>
                        </ol>
                    </div>
                </div>
            ),
            icon: "⛔​",
            color: "red"
        },
        {
            titulo: 'La PC está muy lenta y se congela con frecuencia',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded">
                        <h4 className="text-orange-400 font-semibold mb-2">Solución:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1. Liberar espacio en disco</strong></li>
                            <ul className="ml-3">
                                <li>• Abre el Explorador de archivos → Clic derecho en el disco C: → Propiedades → Liberar espacio.</li>
                                <li>• Ejecuta cleanmgr en el buscador de Windows y elimina archivos temporales.</li>
                            </ul>
                            <li><strong>2. Desactivar programas de inicio</strong></li>
                            <ul className="ml-3">
                                <li>• Presiona Ctrl + Shift + Esc para abrir el Administrador de tareas.</li>
                                <li>• Ve a la pestaña Inicio y deshabilita programas innecesarios.</li>
                            </ul>
                            <li><strong>3. Optimizar el disco duro (si no es SSD)</strong></li>
                            <ul className="ml-3">
                                <li>• Escribe "Desfragmentar y optimizar unidades" en el buscador de Windows y ejecuta el programa.</li>
                                <li>• Selecciona el disco y selecciona optimizar</li>
                            </ul>
                            <li><strong>4. Aaumentar la memoria virtual</strong></li>
                            <ul className="ml-3">
                                <li>• Ve a Configuración avanzada del sistema → Rendimiento → Opciones avanzadas → Memoria virtual.</li>
                                <li>• Establece un tamaño personalizado (mínimo 1.5 veces tu RAM, máximo 3 veces).</li>
                            </ul>
                        </ol>
                    </div>
                </div>
            ),
            icon: "⏳​",
            color: "orange"
        },
        {
            titulo: 'El sistema operativo muestra errores aleatorios o se cierra solo',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                        <h4 className="text-yellow-400 font-semibold mb-2">Solución:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1. Reparar archivos corruptos</strong></li>
                            <ul className="ml-3">
                                <li>• Abre el Símbolo del sistema como administrador (cmd).</li>
                                <li>• Ejecuta: sfc /scannow (Esto verificará y reparará archivos dañados del sistema)</li>
                            </ul>
                            <li><strong>2. Actualizar controladores</strong></li>
                            <ul className="ml-3">
                                <li>• Abre Administrador de dispositivos (devmgmt.msc).</li>
                                <li>• Revisa si hay dispositivos con un signo de advertencia amarillo.</li>
                                <li>• Haz click derecho y selecciona Actualizar controlador</li>
                            </ul>
                            <li><strong>3. Revisar los Eventos del sistema</strong></li>
                            <ul className="ml-3">
                                <li>• Escribe eventvwr en el buscador de Windows y revisa los errores críticos en Registros de Windows → Sistema.</li>
                            </ul>
                            <li><strong>4. Verificar la integridad del disco duro</strong></li>
                            <ul className="ml-3">
                                <li>• Abre cmd como administrador y ejecuta el siguiente comando: chkdsk /f /r</li>
                                <li>• Reinicia la PC para que el sistema analice y repare el disco.</li>
                            </ul>
                        </ol>
                    </div>
                    
                </div>
            ),
            icon: "💻",
            color: "yellow"
        },
        {
            titulo: 'Windows no reconoce dispositivos USB (Pendrives, discos externos, teclados, etc.)',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                        <h4 className="text-purple-400 font-semibold mb-2">Solución:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1. Verificar el Administrador de Dispositivos</strong></li>
                            <ul className="ml-3">
                                <li>• Abre devmgmt.msc y busca Controladores de bus serie universal.</li>
                                <li>• Si algún dispositivo tiene un icono amarillo, haz clic derecho y selecciona "Desinstalar". Luego, reinicia la PC.</li>
                            </ul>
                            <li><strong>2. Ejecuta el Solucionador de problemas de Windows</strong></li>
                            <ul className="ml-3">
                                <li>• Ve a Configuración → Actualización y seguridad → Solucionar problemas.</li>
                                <li>• Ejecuta la herramienta para Hardware y dispositivos.</li>
                            </ul>
                            <li><strong>3. Reiniciar controladores USB</strong></li>
                            <ul className="ml-3">
                                <li>• Abre cmd como administrador y ejecuta:</li>
                                <li className="ml-2">- net stop usbstor</li>
                                <li className="ml-2">- net start usbstor</li>
                            </ul>
                            <li><strong>4. Comporbar el puerto USB y el dispositivo</strong></li>
                            <ul className="ml-3">
                                <li>• Prueba conectar el dispositivo en otro puerto USB.</li>
                                <li>• Conéctalo a otra PC para verificar si el problema es del dispositivo o del puerto.</li>
                            </ul>
                        </ol>
                    </div>  
                </div>
            ),
            icon: "❎",
            color: "purple"
        },
        {
            titulo: 'Windows Update no descarga ni instala actualizaciones',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                        <h4 className="text-green-400 font-semibold mb-2">Solución:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1. Reiniciar los servicios de Windows Update</strong></li>
                            <ul className="ml-3">
                                <li>• Abre cmd como administrador y ejecuta los siguientes comandos:</li>
                                <ul className="ml-2.5 bg-gray-900 w-2xl rounded-xl p-2">
                                    <li className="ml-2">net stop wuauserv</li>
                                    <li className="ml-2">net stop bits</li>
                                    <li className="ml-2">net stop cryptsvc</li>
                                    <li className="ml-2">ren C:\Windows\SoftwareDistribution SoftwareDistribution.old</li>
                                    <li className="ml-2">ren C:\Windows\System32\catroot2 catroot2.old</li>
                                    <li className="ml-2">net start wuauserv</li>
                                    <li className="ml-2">net start bits</li>
                                    <li className="ml-2">net start cryptsvc</li>
                                </ul>
                                <li>• Luego, reinicia la PC e intenta actualizar nuevamente.</li>
                            </ul>
                            <li><strong>2. Ejecuta el Solucionador de Windows Update</strong></li>
                            <ul className="ml-3">
                                <li>• Ve a Configuración → Actualización y seguridad → Solucionar problemas.</li>
                                <li>• Ejecuta la herramienta Windows Update</li>
                            </ul>
                            <li><strong>3. Descargar las actualizaciones manualmente:</strong></li>
                            <ul className="ml-3">
                                <li>• Visita el 
                                    <u className="ml-1 mr-1"><a href="https://www.catalog.update.microsoft.com/Home.aspx">Catálogo de Microsoft Update</a></u>
                                  y busca la actualización que no se instala.
                                </li>
                            </ul>
                        </ol>
                    </div>
                </div>
            ),
            icon: "🔄",
            color: "green"
        },
        {
            titulo: 'Los programas no se abren o se cierran solos',
            contenido: (
                <div className="space-y-4">
                    <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded">
                        <h4 className="text-indigo-400 font-semibold mb-2">Solución:</h4>
                        <ol className="text-gray-300 space-y-2">
                            <li><strong>1. Ejecutar el programa como administrador</strong></li>
                            <ul className="ml-3">
                                <li>• Clic derecho sobre el programa → Ejecutar como administrador.</li>
                            </ul>
                            <li><strong>2. Verififcar la compatibilidad</strong></li>
                            <ul className="ml-3">
                                <li>• Clic derecho sobre el programa → Propiedades → Compatibilidad → Marca "Ejecutar este programa en modo de compatibilidad para..." y elige una versión anterior de Windows.</li>
                            </ul>
                            <li><strong>3. Reinstalar el programa</strong></li>
                            <ul className="ml-3">
                                <li>• Desinstala y vuelve a instalar desde la fuente oficial.</li>
                            </ul>
                            <li><strong>4. Escanear en busca de malware</strong></li>
                            <ul className="ml-3">
                                <li>• Usa Windows Defender o Malwarebytes para verificar si el programa está siendo afectado por un virus.</li>
                            </ul>
                        </ol>
                    </div>
                </div>
            ),
            icon: "📤",
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
        <>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
                    <header className="w-full p-5 gap-4 bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800 flex flex-row items-center mb-10 sticky top-0 z-10">
                        <Navbar />
                        <div className='flex flex-col'>
                            <span className='text-5xl text-blue-400 font-bold tracking-wider'>Software</span>
                            <span className='text-2xl text-gray-400'>Programas, aplicaciones y sistemas operativos</span>
                        </div>
                    </header>
                    
                    <main className="flex-grow px-6 max-w-7xl mx-auto w-full">
                        <section className="mb-8">
                            <div className="relative mb-10">
                                <h2 className="text-3xl text-white font-bold">Problemas Comunes de Software</h2>
                                <div className="absolute -bottom-2 left-0 w-117 h-1 bg-blue-500 rounded-full"></div>
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
                                <div className="absolute -bottom-2 left-0 w-70 h-1 bg-blue-500 rounded-full"></div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="text-blue-400 text-3xl mr-4">🔧</div>
                                        <h3 className="text-2xl text-white font-semibold">Software de Diagnóstico General</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">•</span>
                                            <p className="text-gray-300">Microsoft Sysinternals: Diagnóstico avanzado (Process Explorer, Autoruns, etc.).</p>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">•</span>
                                            <p className="text-gray-300">Glary Utilities: Herramienta todo en uno para limpiar, optimizar y reparar</p>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-500 font-bold">•</span>
                                            <p className="text-gray-300">BleachBit: Alternativa libre y potente a CCleaner (Windows/Linux).</p>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="text-green-400 text-3xl mr-4">🛡️</div>
                                        <h3 className="text-2xl text-white font-semibold">Herramientas para Detectar Malware/Spyware</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">•</span>
                                            <p className="text-gray-300">Malwarebytes: Elimina malware, adware, spyware, y PUPs.</p>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">•</span>
                                            <p className="text-gray-300">AdwCleaner: Especializado en eliminar adware y toolbars no deseadas.</p>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 font-bold">•</span>
                                            <p className="text-gray-300">RKill: Detiene procesos maliciosos para permitir escaneos de antivirus.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>
                    <Credits />
                </div>
        </>
    )
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
