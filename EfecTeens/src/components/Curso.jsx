import { Link } from "react-router-dom";

const Curso = ( { name, route, description } ) => {
    return (
        <div className="h-44 rounded-xl  bg-slate-700 flex flex-col items-center justify-center gap-5 m-10 p-5">
            <div className="flex justify-between gap-10">
                <div className="flex gap-10 text-white text-3xl font-extrabold">                
                    <h3>{name}</h3>
                </div>
                    <Link to={route}><button>Entrar</button></Link>
            </div>
            <div className=" border-t-4 h-3/4 border-zinc-400">
                <p>{description}</p>
            </div>
            
        </div>
    );
}
export default Curso;