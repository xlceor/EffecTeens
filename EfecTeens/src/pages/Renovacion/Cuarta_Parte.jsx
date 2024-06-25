import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Renovacion = () => {
    return (
        <motion.div initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{ duration: 1.5, ease: 'easeOut' }} 
        exit={{ opacity: 0}} 
        style={{ width: "100%", textAlign: "center" }}
        className="flex justify-center">
            <div className="cursos flex flex-col w-full justify-center items-center gap-5 m-10 p-5">
                <Link to='/renovarse' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-cyan-300 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-600 to-teal-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Afilar la sierra</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-white text-white">
                            <p>Tomate un tiempo para renovarte</p>
                        </div>
                    </div>
                </Link>
                <Link to='/esperanza' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className='h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-indigo-600 rounded-xl bg-gradient-to-r from-indigo-300 via-violet-600 to-indigo-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Mantener viva la esperanza</h3>
                            </div>
                        </div>
                        <div className="border-t-2 border-zinc-400 text-white">
                            <p>Moveras montañas</p>
                        </div>
                    </div>
                </Link>
            </div>

        </motion.div>
 

    )
}

export default Renovacion;