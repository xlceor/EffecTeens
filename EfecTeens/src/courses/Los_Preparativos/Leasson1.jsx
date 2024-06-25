import { Link } from 'react-router-dom'

const Habito = () => {
    return (
        <div className="flex w-full text-justify justify-center">
            <div className="w-3/4 flex flex-col gap-10 text-xl m-10 text-slate-300">
                <h1 className=" text-center text-transparent font-extrabold bg-gradient-to-r from-amber-300 via-yellow-600 to-amber-500 bg-clip-text">Adquirir el hábito: Te hace o te deshace</h1>
                <p className=" text-xl">¡Bienvenido! ¿Has oido hablar del libro {'"'}Los 7 Habitos De Los Adolecentes Altamente Efectivos{'"'}? Lo escribio Sean Covey. El no cuenta que, a pesar de que muchos jovenes leen libros, el no fue uno de ellos. Y si estas aqui, probablemente tu tampoco. Por eso, decidimos simplificar el libro de Sean para que sea agradable y facil de leer. No importa cómo llegaste aqui, lo importante es aprender. Prometemos que será una aventura divertida, llena de caricaturas, ideas ingeniosas, citas geniales y anécdotas reales de jóvenes como tú. ¿Estás dispuesto a darnos una oportunidad?</p>
                <h3>¿De acuerdo? ¡De acuerdo!</h3>
                <p>Y bien, de vuelta al libro. Esto nos cuenta Covey:</p>
                <p>Éste se basa en otro que mi padre, Stephen R. Covey, escribió hace varios años, con el título de Los 7 hábitos de las personas altamente efectivas. Sorprendentemente, este volumen se convirtió en uno de los grandes bestsellers de todos los tiempos. Sin embargo, debe mucho de su éxito a mis hermanos, hermanas y a mi. Y como puedes ver, fuimos sus conejillos de indias. Él probó todos sus experimentos psicológicos en nosotros, y por eso es que mis hermanos y hermanas tienen graves problemas emocionales (no es cierto). Afortunadamente, resulté ileso. ¿Por qué, entonces, escribí este libro? Porque la vida para los jóvenes ya no es im juego. Es una jungla. Y si cumplí bien con mi trabajo, este libro puede ser una brújula para ayudarte a navegar. Además, a diferencia del libro de mi papá, que fue escrito para viejos (y que a veces puede ser muy aburrido), el que tienes en tus manos fue escrito especialmente para jóvenes, y siempre es interesante.</p>
                <p>Aunque ya soy un adolescente jubilado, recuerdo muy bien cómo fue serlo en plenitud. Juraría que casi siempre era como estar en una montaña rusa emocional. En retrospectiva, de verdad estoy sorprendido de que pude sobrevivir. Apenas. Nunca olvidaré aquella ocasión, en primero de secundaria, cuando me enamoré por primera vez de una niña llamada Nicole. Le pedí a mi amigo Ciar que le hablara de mí (por aquel entonces me asustaba mucho hablar directamente con las chicas, por lo que usaba intérpretes). Ciar cumplió con su misión, y volvió para informarme.</p>
                <p>-oye, Sean, le dije a Nicole que te gusta.</p>
                <p>-¿Y qué pasó? -repuse, sonriendo.</p>
                <p>-Dijo: ¿Sean? ¡Es muy gordo!</p>
                <p>Clar se rió. Yo quedé devastado. Tuve ganas de meterme a un agujero, para nunca más salir. Juré detestar a las chicas de por vida. Afortunadamente, predominaron mis hormonas y las chicas jamás dejaron de gustarme.</p>
                <p>Sospecho que algunas de las luchas que los jóvenes tienen en común conmigo también son conocidas para ti:</p>
                <div className="flex flex-col pl-10 gap-5">
                    <li>{'"'}Hay mucho por hacer, y nunca hay tiempo suficiente. Tengo la escuela, la tarea, un trabajo, amigos, fiestas y encima de todo una familia. Siempre estoy en tensión. ¡Auxilio!{'"'}</li>
                    <li>{'"'}¿Y cómo puedo sentirme bien conmigo mismo si no me adapto? En todas partes se me recuerda que hay otro que es más listo, o más guapo, o más popular. No puedo evitar el pensar: {"'"}Si tuviera su cabello, su ropa, su personalidad, su novio, entonces seria feliz{"'"}{'"'}</li>
                    <li>{'"'}Siento como si mi vida estuviera fuera de control{'"'}</li>
                    <li>{'"'}Mi familia es un desastre. Si mis padres me dejaran en paz, podría dirigir mejor mi vida. Me parece que siempre me están regañando, y que yo nunca puedo dejarlos satisfechos{'"'}</li>
                    <li>{'"'}Sé que no estoy viviendo del modo en que debería. Ya probé de todo: drogas, bebida, sexo, lo que tú quieras. Pero cuando estoy con mis amigos, sucumbo y hago lo que hacen los demás{'"'}</li>
                    <li>{'"'}Comencé a hacer otra dieta. Creo que en este año ya son cinco. Realmente quiero cambiar, pero no tengo la disciplina para continuar. Cada vez que inicio una nueva dieta, tengo esperanzas. Pero por lo general pasa poco tiempo y la dejo. Y entonces me siento terriblemente{'"'}</li>
                    <li>{'"'}No me está yendo muy bien en la escuela. Si no obtengo buenas calificaciones, nunca podré entrar a la universidad{'"'}</li>
                    <li>{'"'}Soy susceptible y muchas veces me deprimo, y entonces no sé qué hacer{'"'}</li>
                </div>
                <p>Estos problemas son reales, y no podemos escapar a la vida real. Así, no trataré de evadirlos. Mejor te daré algunos medios para que puedas lidiar con todo eso. ¿Cuáles son? Los 7 Hábitos de los Adolescentes Altamente Efectivos o, dicho de otro modo, las siete características que tienen en común los jóvenes felices y exitosos de todo el mundo. En este punto, posiblemente ya te estás preguntando cuáles son estos hábitos, por lo que estaría bien que terminara con el suspenso. Aquí están, seguidos de una breve explicación:</p>
                <ul className="flex flex-col gap-4">
                    <li className="font-bold italic text-3xl">Ser Proactivo</li>
                        <li className="ml-5">Hacerte responsable de tu propia vida.</li>
                    <li className="font-bold italic text-3xl">Comenzar con el fin en la mente</li>
                        <li className="ml-5">Definir tu misión y metas en la vida.</li>
                    <li className="font-bold italic text-3xl">Poner Primero lo Primero</li>
                        <li className="ml-5">Marcar prioridades y hacer primero las cosas más importantes.</li>
                    <li className="font-bold italic text-3xl">Pensar Ganar-Ganar</li>
                        <li className="ml-5">Tener una actitud de que {'"'}todos pueden ganar{'"'}.</li>
                    <li className="font-bold italic text-3xl">Busca Primero Entender, Luego Ser Entendido</li>
                        <li className="ml-5">Escuchar sinceramente a los demás.</li>
                    <li className="font-bold italic text-3xl">Sinergizar</li>
                        <li className="ml-5">Trabajar en conjunto para lograr más.</li>
                    <li className="font-bold italic text-3xl">Afilar la Sierra</li>
                        <li className="ml-5">Renovarte con reoularidad.</li>
                </ul>
                <p>Como lo muestra este diagrama, los hábitos se forman uno sobre el otro. Los hábitos 1, 2 y 3 se refieren a ser dueños de nosotros mismos. Los llamamos {'"'}victoria privada{'"'}. Los hábitos 4, 5 y 6 se refieren a relaciones y a trabajar en equipo. Los llamamos {'"'}victoria pública{'"'}. Tienes que estar preparado a nivel personal antes de poder jugar bien en equipo. Por ello la victoria privada es antes que la victoria pública. El último hábito, el 7, es el hábito de la renovación. Nutre a los seis anteriores.</p>



                <h2>¿Qué son los hábitos?</h2>
                <p>Los hábitos son cosas que hacemos repetidamente. Pero la mayor parte del tiempo no estamos conscientes de que los tenemos. Están en piloto automático.</p>
                <h3>Algunos hábitos son buenos, como por ejemplo:</h3>
                <div className="ml-5">
                    <li>Hacer ejercicio regularmente.</li>
                    <li>Planificar anticipadamente.</li>
                    <li>Demostrar respeto hacia los demás.</li>
                </div>
                <h3>Algunos son malos, como por ejemplo:</h3>
                <div className="ml-5">
                    <li>Pensar negativamente.</li>
                    <li>Sentirse inferior.</li>
                    <li>Culpar a los demás.</li>
                </div>
                <h3>Y algunos no son muy importantes, incluyendo:</h3>
                <div className="ml-5">
                    <li>Bañarse por las noches.</li>
                    <li>Comer yogurt con un tenedor.</li>
                    <li>Leer las revistas de la última página a la portada.</li>
                </div>
                <p>Dependiendo de lo que sean, nuestros hábitos pueden hacemos o deshacemos. Nos convertimos en aquello que hacemos repetidamente. Como dijo el escritor Samuel Smiles:</p>
                <div className=" w-full flex text-center justify-center items-center">
                    <div className=" w-3/4">
                    <p className="font-bold text-2xl italic">Siembra un pensamiento, y cosecharás un acto; siembra un acto, y cosecharás un hábito; siembra un hábito, y cosecharás una personalidad; siembra una personalidad, y cosecharás un destino.</p>
                    </div>
                </div>
                <p>Afortunadamente, somos más fuertes que nuestros hábitos. Por consiguiente, puedes cambiarlos. Por ejemplo, cruza los brazos. Ahora intenta cruzarlos al revés. ¿Cómo se siente? Muy extraño, ¿verdad? Pero si los cruzas al revés durante treinta días seguidos, entonces ya no lo sentirás tan extraño. Ni siquiera tendrás que pensarlo. Y adquieres el hábito. Cada vez que puedas verte al espejo y decir: "Eso es algo que no me gusta de mí mismo", podrás cambiar un mal hábito por uno bueno. No siempre es fácil, pero siempre es posible. No todas las ideas que vienen en este libro funcionarán en tu caso. Pero tampoco necesitas ser perfecto para ver resultados. Sólo con vivir algunos de los hábitos parte del tiempo te ayudará a experimentar cambios en tu vida que nunca pensaste que fueran posibles.</p>
                <h3>Los 7 Hábitos pueden ayudarte a:</h3>
                <div className="ml-5 grid grid-cols-2">
                    <li>Ejercer control sobre tu vida.</li>
                    <li>Mejorar tus relaciones con los amigos.</li>
                    <li>Tomar decisiones más prudentes.</li>
                    <li>Llevarte bien con tus padres.</li>
                    <li>Sobreponerte a adicciones.</li>
                    <li>Definir tus valores y lo que te es más importante.</li>
                    <li>Hacer más cosas en menos tiempo.</li>
                    <li>Aumentar tu seguridad.</li>
                    <li>Ser feliz.</li>
                    <li>Hallar un equilibrio entre la escuela, el trabajo, los amigos y todo lo demás.</li>

                </div>
                <p>Una cuestión final. Este libro es tuyo, así que úsalo. Ve por un lápiz, pluma o plumón para subrayarlo. No temas subrayar, resaltar o poner tus ideas favoritas en un círculo. Toma notas en los márgenes. Garabatea. Vuelve a leer las anécdotas que te inspiren. Memoriza las citas que te den esperanza. Intenta dar los "pasos de bebé" al final de cada capítulo, que están diseñados para ayudarte a comenzar a vivir inmediatamente los hábitos. Obtendrás mucho más de este libro si así lo haces. Quizá quieras llamar a los teléfonos o visitar las páginas de Internet que aparecen en la última página de este libro, para obtener ayuda o información adicional. Si eres el tipo de lector al que le gusta saltar de una página a la otra buscando caricaturas y otras ilustraciones interesantes, también está bien. Pero en algún punto deberías leer el libro del principio al fin, porque los 7 Hábitos forman una secuencia. Uno se basa en el anterior. El Hábito 1 es antes que el Hábito 2 (y así sucesivamente) por una razón determinada.</p>
                <p>¿Qué dices? ¡Anda, lee este libro!</p>
                <div className="w-full flex justify-center items-center">
                <p>________________________⭐️⭐️⭐️______________________</p>
                </div>
                <p>PRÓXIMAS ATRACCIONES</p>
                <p>Examinemos diez de las frases más torpes que se hayan dicho. No te lo puedes perder, ¡sigue leyendo!</p>

                <div className='m-5 w-full flex justify-end'>
            <Link to='/paradigmas'><button className='h-full text-white shadow-3xl transition-transform duration-150 ease-out transform hover:scale-105 shadow-cyan-300 rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-600 to-teal-500 flex flex-col items-center justify-center gap-5 p'>Siguiente</button></Link>
            </div>
            </div>
        </div>
    )
}

export default Habito