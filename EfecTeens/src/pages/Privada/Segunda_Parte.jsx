import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

    

const Privada = () => {
    return (
        <motion.div initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{ duration: 1.5, ease: 'easeOut' }} 
        exit={{ opacity: 0}} 
        style={{ width: "100%", textAlign: "center" }}
        className="flex justify-center">
            <div className="cursos flex flex-col w-full justify-center items-center gap-5 m-10 p-5">
                <Link to='/proactivo' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-orange-500 rounded-xl  bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Ser Procativo</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-white text-white">
                            <p>Hacerte responsable de tu propia vida</p>
                        </div>
                    </div>
                </Link>
                <Link to='/metas' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-yellow-400 rounded-xl bg-gradient-to-r from-amber-300 via-yellow-600 to-amber-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Comenzar con el fin en la mente</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-zinc-400 text-white">
                            <p>Definir tu misión y metas</p>
                        </div>
                    </div>
                </Link>
                <Link to='/prioridades' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-green-400 rounded-xl bg-gradient-to-r from-green-400 via-emerald-600 to-emerald-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Poner primero lo primero</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-zinc-400 text-white">
                            <p>Marcar prioridades y hacer primero las cosas importantes</p>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}
export default Privada;