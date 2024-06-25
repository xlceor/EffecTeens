import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Landing from './pages/landing';
import Proactivo from './courses/Victoria_Privada/Proactivo';
import Metas from './courses/Victoria_Privada/Metas';
import Prioridades from './courses/Victoria_Privada/Prioridades';
import Escuchar from './courses/Victoria_Publica/Escuchar';
import Ganar from './courses/Victoria_Publica/Ganar-Ganar';
import Sinergizar from './courses/Victoria_Publica/Sinergizar';
import Renovarse from './courses/Renovacion/Renovarse';
import Register from './pages/Register';
import Privada from './pages/Privada/Segunda_Parte';
import Publica from './pages/Publica/Tercera_Parte';
import Preparativos from './pages/Preparativos/Primera_Parte';
import Renovacion from './pages/Renovacion/Cuarta_Parte';
import Habito from './courses/Los_Preparativos/Leasson1';
import Paradigmas from './courses/Los_Preparativos/Paradigmas';
import Esperanza from './courses/Renovacion/Esperanza';



function App() {

  return (
              <Routes>
                <Route path="/"element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/register" element={<Register/>} />

                <Route path='/preparativos' element={<Preparativos />}/>
                <Route path='/privada' element={<Privada/>} />
                <Route path='/publica' element={<Publica/>} />
                <Route path="/renovacion" element={<Renovacion/>} />

                <Route path="/leason1" element={<Habito/>} />
                <Route path="/paradigmas" element={<Paradigmas/>} />

                <Route path="/proactivo" element={<Proactivo/>} />
                <Route path="/metas" element={<Metas/>} />
                <Route path="/prioridades" element={<Prioridades/>} />

                <Route path="/ganar" element={<Ganar/>} />
                <Route path="/escuchar" element={<Escuchar/>} />
                <Route path="/sinergizar" element={<Sinergizar/>} />
                <Route path="/esperanza" element={<Esperanza/>} />

                <Route path="/renovarse" element={<Renovarse/>} />
              </Routes>
  )
}

export default App
