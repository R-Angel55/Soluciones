import { useState, useEffect } from "react";
import { Credits } from "./Card";
import Navbar from "./Navbar";

export default function Mantenimiento() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('preventivo');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);
    
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
                <div className="text-5xl text-blue-400 mb-6 animate-pulse">Mantenimiento</div>
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    const categories = [
        { id: 'preventivo', name: 'Preventivo', icon: '🛡️' },
        { id: 'correctivo', name: 'Correctivo', icon: '🔧' },
        { id: 'software', name: 'Software', icon: '💻' },
        { id: 'hardware', name: 'Hardware', icon: '⚙️' }
    ];

    const maintenanceData = {
        preventivo: [
            {
                title: "Limpieza Externa",
                frequency: "Semanal",
                tools: ["Paño de microfibra", "Alcohol isopropílico", "Aire comprimido"],
                steps: [
                    "Apaga y desconecta completamente el equipo",
                    "Limpia la pantalla con paño húmedo en movimientos circulares",
                    "Limpia el teclado con aire comprimido entre las teclas",
                    "Desinfecta el mouse y superficies táctiles"
                ],
                icon: "🧹",
                color: "blue"
            },
            {
                title: "Limpieza Interna",
                frequency: "Cada 3-6 meses",
                tools: ["Aire comprimido", "Pinceles antiestáticos", "Destornilladores"],
                steps: [
                    "Apaga y desconecta el equipo completamente",
                    "Abre la carcasa siguiendo el manual",
                    "Utiliza aire comprimido para limpiar ventiladores",
                    "Limpia el polvo de componentes y conectores",
                    "Vuelve a ensamblar cuidadosamente"
                ],
                icon: "🌪️",
                color: "green"
            },
            {
                title: "Actualización de Software",
                frequency: "Mensual",
                tools: ["Conexión a internet", "Antivirus actualizado"],
                steps: [
                    "Verifica actualizaciones de Windows",
                    "Actualiza controladores desde el sitio del fabricante",
                    "Actualiza programas instalados",
                    "Ejecuta escaneo completo de antivirus"
                ],
                icon: "🔄",
                color: "purple"
            }
        ],
        correctivo: [
            {
                title: "Diagnóstico de Problemas",
                frequency: "Cuando sea necesario",
                tools: ["Software de diagnóstico", "Multímetro", "Cables de prueba"],
                steps: [
                    "Identifica síntomas específicos del problema",
                    "Ejecuta herramientas de diagnóstico del sistema",
                    "Verifica logs de eventos en Windows",
                    "Realiza pruebas de componentes individuales"
                ],
                icon: "🔍",
                color: "red"
            },
            {
                title: "Reemplazo de Componentes",
                frequency: "Según necesidad",
                tools: ["Componentes nuevos", "Herramientas básicas", "Pasta térmica"],
                steps: [
                    "Identifica el componente defectuoso",
                    "Adquiere el repuesto compatible",
                    "Desinstala el componente dañado",
                    "Instala el nuevo componente correctamente",
                    "Verifica funcionamiento completo"
                ],
                icon: "🔩",
                color: "orange"
            },
            {
                title: "Recuperación de Datos",
                frequency: "En emergencias",
                tools: ["Software de recuperación", "Disco externo", "Cables SATA"],
                steps: [
                    "No uses el disco dañado más de lo necesario",
                    "Conecta el disco como secundario",
                    "Utiliza software especializado",
                    "Copia datos importantes primero",
                    "Considera servicios profesionales para casos críticos"
                ],
                icon: "💾",
                color: "yellow"
            }
        ],
        software: [
            {
                title: "Optimización del Sistema",
                frequency: "Mensual",
                tools: ["CCleaner", "Defragmentador", "Administrador de tareas"],
                steps: [
                    "Ejecuta liberador de espacio en disco",
                    "Limpia archivos temporales y caché",
                    "Desfragmenta discos duros (no SSD)",
                    "Optimiza programas de inicio",
                    "Limpia registro de Windows"
                ],
                icon: "⚡",
                color: "cyan"
            },
            {
                title: "Gestión de Archivos",
                frequency: "Quincenal",
                tools: ["Explorador de archivos", "Software de compresión"],
                steps: [
                    "Organiza archivos en carpetas apropiadas",
                    "Elimina archivos duplicados",
                    "Comprime archivos grandes poco usados",
                    "Vacía papelera de reciclaje",
                    "Respalda archivos importantes"
                ],
                icon: "📁",
                color: "indigo"
            },
            {
                title: "Seguridad y Respaldos",
                frequency: "Semanal",
                tools: ["Antivirus", "Software de respaldo", "Firewall"],
                steps: [
                    "Ejecuta escaneo completo de antivirus",
                    "Verifica configuración de firewall",
                    "Realiza respaldo de datos críticos",
                    "Actualiza definiciones de virus",
                    "Revisa logs de seguridad"
                ],
                icon: "🔒",
                color: "pink"
            }
        ],
        hardware: [
            {
                title: "Monitoreo de Temperaturas",
                frequency: "Semanal",
                tools: ["HWiNFO", "Core Temp", "MSI Afterburner"],
                steps: [
                    "Instala software de monitoreo",
                    "Verifica temperaturas de CPU y GPU",
                    "Revisa velocidades de ventiladores",
                    "Documenta valores normales",
                    "Alerta si hay cambios significativos"
                ],
                icon: "🌡️",
                color: "red"
            },
            {
                title: "Verificación de Conexiones",
                frequency: "Cada 6 meses",
                tools: ["Destornilladores", "Linterna", "Alcohol isopropílico"],
                steps: [
                    "Apaga y desconecta el equipo",
                    "Verifica conexiones de cables internos",
                    "Limpia contactos con alcohol",
                    "Revisa que no haya cables sueltos",
                    "Verifica montaje de componentes"
                ],
                icon: "🔌",
                color: "green"
            },
            {
                title: "Mantenimiento de Almacenamiento",
                frequency: "Trimestral",
                tools: ["CrystalDiskInfo", "Software del fabricante"],
                steps: [
                    "Verifica salud de discos duros/SSD",
                    "Ejecuta chkdsk en discos duros",
                    "Optimiza SSD con TRIM",
                    "Verifica espacio libre disponible",
                    "Planifica reemplazo si es necesario"
                ],
                icon: "💿",
                color: "blue"
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
            <header className="w-full p-5 gap-4 bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-800 flex flex-row items-center mb-10 sticky top-0 z-10">
                <Navbar />
                <div className='flex flex-col'>
                    <span className='text-5xl text-blue-400 font-bold tracking-wider'>Mantenimiento</span>
                    <span className='text-2xl text-gray-400'>Mantener tu equipo en óptimas condiciones</span>
                </div>
            </header>

            <main className="flex-grow px-6 max-w-7xl mx-auto w-full">
                {/* Category Navigation */}
                <section className="mb-8">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Tipos de Mantenimiento</h2>
                        <div className="absolute -bottom-2 left-0 w-56 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                        {categories.map((category) => (
                            <CategoryButton
                                key={category.id}
                                category={category}
                                isActive={activeCategory === category.id}
                                onClick={() => setActiveCategory(category.id)}
                            />
                        ))}
                    </div>
                </section>

                {/* Maintenance Cards */}
                <section className="mb-8">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">
                            {categories.find(c => c.id === activeCategory)?.name || 'Mantenimiento'}
                        </h2>
                        <div className="absolute -bottom-2 left-0 w-48 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {maintenanceData[activeCategory]?.map((item, index) => (
                            <MaintenanceCard key={index} item={item} />
                        ))}
                    </div>
                </section>

                {/* Schedule Section */}
                <section className="mb-16">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Calendario de Mantenimiento</h2>
                        <div className="absolute -bottom-2 left-0 w-64 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ScheduleItem period="Semanal" tasks={["Limpieza externa", "Escaneo antivirus", "Monitoreo temperaturas"]} color="blue" />
                            <ScheduleItem period="Quincenal" tasks={["Gestión archivos", "Organización datos"]} color="green" />
                            <ScheduleItem period="Mensual" tasks={["Actualizaciones", "Optimización sistema"]} color="yellow" />
                            <ScheduleItem period="Trimestral" tasks={["Limpieza interna", "Verificación disco"]} color="red" />
                        </div>
                    </div>
                </section>

                {/* Tips Section */}
                <section className="mb-16">
                    <div className="relative mb-10">
                        <h2 className="text-3xl text-white font-bold">Consejos Importantes</h2>
                        <div className="absolute -bottom-2 left-0 w-52 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-green-400 text-3xl mr-4">✅</div>
                                <h3 className="text-2xl text-white font-semibold">Buenas Prácticas</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Mantén un ambiente limpio y libre de polvo</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Usa protectores de voltaje y UPS</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Documenta cambios y mantenimientos</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold">•</span>
                                    <p className="text-gray-300">Mantén respaldos actualizados</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-red-400 text-3xl mr-4">⚠️</div>
                                <h3 className="text-2xl text-white font-semibold">Qué Evitar</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <p className="text-gray-300">No uses aspiradoras en componentes internos</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <p className="text-gray-300">Evita líquidos cerca del equipo</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <p className="text-gray-300">No forces conexiones o componentes</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <p className="text-gray-300">No ignores señales de advertencia</p>
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

function CategoryButton({ category, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300
            ${isActive 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
            <span className="text-2xl">{category.icon}</span>
            <span>{category.name}</span>
        </button>
    );
}

function MaintenanceCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    
    const colors = {
        blue: "from-blue-500 to-blue-600",
        green: "from-green-500 to-green-600",
        purple: "from-purple-500 to-purple-600",
        red: "from-red-500 to-red-600",
        orange: "from-orange-500 to-orange-600",
        yellow: "from-yellow-500 to-yellow-600",
        cyan: "from-cyan-500 to-cyan-600",
        indigo: "from-indigo-500 to-indigo-600",
        pink: "from-pink-500 to-pink-600"
    };
    
    const bgGradient = colors[item.color] || colors.blue;
    
    return (
        <div 
            className={`bg-gray-800 rounded-xl transition-all duration-300 border border-gray-700 overflow-hidden
            ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-blue-500/20' : 'shadow-lg shadow-black/30'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`h-1 bg-gradient-to-r ${bgGradient}`}></div>
            
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl">{item.icon}</span>
                        <h3 className="text-xl text-white font-bold">{item.title}</h3>
                    </div>
                    <span className="text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                        {item.frequency}
                    </span>
                </div>
                
                <div className="mb-4">
                    <h4 className="text-gray-400 font-semibold mb-2">Herramientas necesarias:</h4>
                    <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool, index) => (
                            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h4 className="text-gray-400 font-semibold mb-2">Pasos a seguir:</h4>
                    <ol className="text-gray-300 space-y-2">
                        {item.steps.map((step, index) => (
                            <li key={index} className="flex gap-2 text-sm">
                                <span className="text-blue-400 font-bold">{index + 1}.</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

function ScheduleItem({ period, tasks, color }) {
    const colors = {
        blue: "border-blue-500 text-blue-400",
        green: "border-green-500 text-green-400",
        yellow: "border-yellow-500 text-yellow-400",
        red: "border-red-500 text-red-400"
    };
    
    const colorClass = colors[color] || colors.blue;
    
    return (
        <div className={`border-l-4 ${colorClass} pl-4`}>
            <h4 className="font-bold text-lg mb-2">{period}</h4>
            <ul className="text-gray-300 space-y-1">
                {tasks.map((task, index) => (
                    <li key={index} className="text-sm">• {task}</li>
                ))}
            </ul>
        </div>
    );
}