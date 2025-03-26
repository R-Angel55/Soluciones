import { Credits } from "./Card";
import Navbar from "./Navbar";

export default function Comunes(){
    return(
        <>
        <div className="w-full p-5 gap-4 bg-black flex flex-row items-left mb-10 mt-3">
            <div className='flex'><Navbar /></div>
            <div className='w-full flex flex-col items-left'>
                <span className='text-5xl text-neutral-50'>Soluciones Rápidas</span>
                <span className='text-2xl text-gray-600'>Problemas comunes o frecuentes</span>
            </div>
        </div>

          <section className='grid md:grid-cols-2 w-325 gap-4 ml-4'>
            <div className='w-150 bg-neutral-200 shadow-gray-400 shadow-lg
            rounded-2xl flex justify-center item-center p-4 flex-col'>
                <h1 className="text-neutral-900 text-3xl">Reinicio del Sistema</h1>
                <ul className="text-neutral-700 text-lg">
                    <p>1. Guarda todos tus documentos abiertos</p>
                    <p>2. Cierra todas las aplicaciones</p>
                    <p>3. Reinicia tu computadora desde el menú de inicio</p>
                    <p>4. Espera a que el sistema se reinicie completamente</p>
                </ul>
           </div>
           <div className='w-150 bg-neutral-200 shadow-gray-400 shadow-lg
            rounded-2xl flex justify-center item-center p-4 flex-col'>
                <h1 className="text-neutral-900 text-3xl">Actualizar Controladores</h1>
                <ul className="text-neutral-700 text-lg">
                    <p>1. Abre el Administrador de dispositivos</p>
                    <p>2. Localiza el dispositivo que necesita actualización</p>
                    <p>3. Haz click derecho y selecciona "Actualizar controlador"</p>
                    <p>4. Sigue las instrucciones en pantalla</p>
                </ul>
           </div>
           <div className='w-150 bg-neutral-200 shadow-gray-400 shadow-lg
            rounded-2xl flex justify-center item-center p-4 flex-col'>
                <h1 className="text-neutral-900 text-3xl">PC Lenta</h1>
                <ul className="text-neutral-700 text-lg">
                    <p>1. Cierra programas innecesarios (Ctrl + Shift + Esc → Finalizar Tareas).</p>
                    <p>2. Borra archivos temporales (Win + R → escribe %temp% → Eliminar todo).</p>
                    <p>3. Desactiva programas al inicio (Ctrl + Shift + Esc → Inicio → Deshabilitar).</p>
                </ul>
           </div>
           <div className='w-150 bg-neutral-200 shadow-gray-400 shadow-lg
            rounded-2xl flex justify-center item-center p-4 flex-col'>
                <h1 className="text-neutral-900 text-3xl">Pantalla Azul</h1>
                <ul className="text-neutral-700 text-lg">
                    <p>1. Reinicia en modo seguro (F8 o Shift + Reiniciar).</p>
                    <p>2. Actualiza los drivers (Desde el administrador de dispositivos).</p>
                    <p>3. Escanea errores del disco (ejecuta CMD como administrador → chkdsk /f /r + enter).</p>
                </ul>
           </div>
          </section>
          <Credits />
        </>
    )
}