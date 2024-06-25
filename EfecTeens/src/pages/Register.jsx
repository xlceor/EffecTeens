import { motion } from "framer-motion"
import {useState} from 'react'
import axios from 'axios';

const Register = ( ) => {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            console.log('Started to submit')
            const response = await axios.post('http://localhost:5000/register', JSON.stringify(formData));
            if (response.ok) {
                const data = await response.json();
                alert(data.message); // Mostrar mensaje de éxito
              } else {
                const errorData = await response.json();
                alert(errorData.error); // Mostrar mensaje de error
              }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };
    
  
    return (
        <motion.div 
        initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        exit={{ opacity: 0}} 
        style={{ width: "100%", textAlign: "center" }}
        >
            <div className="main flex flex-col gap-y-5 justify-center items-center">
                
            <div className="registration-container flex flex-col gap-y-5 bg-gray-800 backdrop-blur-lg w-3/4 p-10 m-10 rounded-xl">
                <h2 className="text-2xl font-bold">Registro</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-5">
                    <input
                        type="text"
                        placeholder="Nombre"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="h-10 w-2/3 rounded-md text-center bg-gray-700 placeholder-gray-200"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-10 w-2/3 rounded-md text-center bg-gray-700 placeholder-gray-200"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        className="h-10 w-2/3 rounded-md text-center bg-gray-700 placeholder-gray-200"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar Contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="h-10 w-2/3 rounded-md text-center bg-gray-700 placeholder-gray-200"
                    />
                    <button type="submit" className="h-14 w-1/3 bg-gradient-to-r from-emerald-500 to-cyan-700">Registrarse</button>
                </form>
            </div>


                            

            </div>
        </motion.div>
    )
}
export default Register;