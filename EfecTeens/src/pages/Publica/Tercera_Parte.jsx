import { Link } from "react-router-dom";
import { motion } from 'framer-motion'






const Publica = () => {
    return (
        <motion.div initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{ duration: 1.5, ease: 'easeOut' }} 
        exit={{ opacity: 0}} 
        style={{ width: "100%", textAlign: "center" }}
        className="flex justify-center">
            <div className="cursos flex flex-col w-full justify-center items-center gap-5 m-10 p-5">
                <Link to='/ganar' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-sky-500 rounded-xl bg-gradient-to-r from-sky-500 via-blue-700 to-blue-600  flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Pensar Ganar-Ganar</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-white text-white">
                            <p>Tener una actitud de {'"'}todos pueden ganar{'"'}</p>
                        </div>
                    </div>
                </Link>
                <Link to='/escuchar' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-green-300 rounded-xl bg-gradient-to-r from-green-300 via-emerald-500 to-emerald-400 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Primero busca entender, luego ser entendido</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-zinc-400 text-white">
                            <p>Escuchar sinseramente a los demas</p>
                        </div>
                    </div>
                </Link>
                <Link to='/sinergizar' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-cyan-300 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-600 to-teal-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Sinergizar</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-zinc-400 text-white">
                            <p>Trabajar en conjunto</p>
                        </div>
                    </div>
                </Link>
            </div>

        </motion.div>

    )
}

export default Publica;