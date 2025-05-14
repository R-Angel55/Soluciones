import { useState, useEffect } from "react";
import { Credits } from "./Card";
import Navbar from "./Navbar";

function Hardware (){
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
                    <div className="text-5xl text-blue-400 mb-6 animate-pulse">Hardware</div>
                    <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                </div>
            );
        }

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