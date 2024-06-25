import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className="flex flex-col justify-center text-center">
                <motion.div
                    initial={{ opacity: 0}} 
                    animate={{ opacity: 1}}
                    transition={{ duration: 1.5, ease: 'easeOut' }} 
                    exit={{ opacity: 0}} 
                    style={{ width: "100%", textAlign: "center" }}
                    className="flex justify-center">
            <div className="cursos flex flex-col w-full justify-center items-center gap-5 m-10 p-5 ">
                <h1>Ruta de aprendizaje</h1>
                <p>El libro Los 7 Habitos de los Adolecentes Altamente Efectivos se divide en 4 partes importantes. Revisalas en el orden que te los proporcionamos</p>
                <Link to='/preparativos' className=" min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className=' h-full shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105  shadow-green-400 rounded-xl bg-gradient-to-r from-green-400 via-emerald-600 to-emerald-500 flex flex-col flex-1  items-center justify-center gap-5 p-5'>
                        <div className="flex">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Los Preparativos</h3>
                            </div>
                        
                        </div>
                        <div className=" border-t-2 border-zinc-400 text-white">
                            <p>Esta es una seccion introductoria al curso. Aprenderas los fundamentos nesesarios para entender el resto del curso</p>
                        </div>
                    </div>
                </Link>
                <Link to='/privada' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className=' h-full transition-transform duration-150 ease-out transform hover:scale-105 shadow-3xl shadow-sky-500 rounded-xl bg-gradient-to-r from-sky-500 via-blue-700 to-blue-600 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>La Victoria privada</h3>
                            </div>
                        </div>
                        <div className=" border-t-2 text-white border-zinc-400">
                            <p>Aprenderas a cambiar para mejor, comenzando por quien esta en el espejo</p>
                        </div>
                    </div>
                </Link>
                <Link to='/publica' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className=' h-full transition-transform duration-150 ease-out transform hover:scale-105 shadow-3xl shadow-orange-500 rounded-xl  bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>La Victoria publica</h3>
                            </div>
                        
                        </div>
                        <div className=" border-t-2 text-white border-zinc-400">
                            <p>Ahora, aprenderas a mejorar tus relaciones y tu trabajo en equipo con las personas que quieres.</p>
                        </div>
                    </div>
                </Link>
                <Link to='/renovacion' className="min-h-44 min-w-3/4 w-full md:w-5/6 m-10">
                    <div className=' h-full transition-transform duration-150 ease-out transform hover:scale-105 shadow-3xl shadow-cyan-300 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-600 to-teal-500 flex flex-col items-center justify-center gap-5 p-5'>
                        <div className="flex justify-between gap-10">
                            <div className="flex text-white text-3xl font-extrabold">                
                                <h3>Renovacion</h3>
                            </div>
                        
                        </div>
                        <div className=" border-t-2 text-white border-zinc-400">
                            <p>Finalmente, aprenderas la importancia de cultivarte regularmente.</p>
                        </div>
                    </div>
                </Link>

            </div>
    </motion.div>

        </div>
    )
}

export default Home;