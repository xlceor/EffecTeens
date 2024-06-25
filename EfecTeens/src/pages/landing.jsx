import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
const Landing = () => {
    return (            
    <motion.div
    initial={{ opacity: 0}} 
    animate={{ opacity: 1}}
    transition={{ duration: 1.5, ease: 'easeOut' }} 
    exit={{ opacity: 0}} 
    style={{ width: "100%", textAlign: "center" }}>
        <div className="flex flex-col h-full m-2 p-4">
            <div className="navbar flex justify-between">
                <div className="logo text-transparent transition-transform duration-150 ease-out transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-extrabold text-3xl">Effec<span className=" text-5xl text-transparent bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text">7</span>eens</div>
                <div className="button">
                <Link to="/register"><button className='Login  shadow-2xl transition-transform duration-150 ease-out transform hover:scale-105 rounded-xl bg-gradient-to-r from-green-400 via-emerald-600 to-cyan-500 text-white py-2 px-4'>Get Started</button></Link>
                </div>
                
            </div>
            <div className="present flex text-center flex-col h-full items-center justify-center mt-5 p-8 ">
                <div className="introduccion flex flex-col  gap-20 justify-center items-center">
                    <h1 className=" text-transparent bg-gradient-to-r from-gray-300 to-gray-800 bg-clip-text font-bold text-6xl md:text-7xl/[1.07]">Descubre lo que caracteriza a los jóvenes <span className=" transition-transform duration-150 ease-out transform hover:scale-105 text-transparent  bg-gradient-to-r from-green-400 via-emerald-600 to-cyan-500 bg-clip-text  text-7xl md:text-8xl/[1.07] ">exitosos</span> </h1>
                    <div className="w-3/4 text-justify">
                        <h3 className="text-gray-400 text-xl"><span className="text-transparent transition-transform duration-150 ease-out transform hover:scale-105 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-extrabold text-2xl">Rompe</span> con las conductas que limitan tu potencial. Nuestro enfoque ayuda a jóvenes a superar obstáculos académicos y personales para desbloquear su verdadero <span className="text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-extrabold text-2xl">EXITO</span></h3>
                    </div>
                    <Link to="home"><button className='Login transition-transform duration-150 ease-out transform hover:scale-105 hover:transition-tranform rounded-xl bg-gradient-to-r from-green-400 via-emerald-600 to-cyan-500  text-white py-2 px-4'>Get Started</button></Link>
                </div>
            </div>
            </div>
    </motion.div>

    )
}

export default Landing;