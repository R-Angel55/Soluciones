import { Credits } from "./Card";
import Navbar from "./Navbar";

function Hardware (){
    return(
        <>
        <div className="w-full p-5 gap-4 bg-black flex flex-row items-left mb-10 mt-3">
            <div className='flex'><Navbar /></div>
            <div className='w-full flex flex-col items-left'>
                <span className='text-5xl text-neutral-50'>Hardware</span>
                <span className='text-2xl text-gray-600'>Componentes físicos, periféricos y conexiones</span>
            </div>
        </div>
        <Credits />
        </>
    )
}
export default Hardware;