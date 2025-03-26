import { Credits } from "./Card";
import Navbar from "./Navbar";

export default function Software (){
    return (
        <>
        <div className="w-full p-5 gap-4 bg-black flex flex-row items-left mb-10 mt-3">
            <div className='flex'><Navbar /></div>
            <div className='w-full flex flex-col items-left'>
                <span className='text-5xl text-neutral-50'>Software</span>
                <span className='text-2xl text-gray-600'>Programas, aplicaciones y sistemas operativos</span>
            </div>
        </div>
        <Credits />
        </>
    )
}