/* eslint-disable react/prop-types */
import { getEdadActual } from "../../Utils/DateUtils";
import './JugadorEstadisticasToolbar.css'
import soccerPlayer from '../../assets/soccer-player.png'

const JugadorEstadisticasToolbar = ({ nombreJugador = "Facundo", fechaNac="1998-07-21" }) => {
    const Goles = 52;
    const Rendimiento = 6.4;
    /*
        Datos del jugador llegan por props, la idea mas adelante es guardar datos de login en cookie, quizas ni las necesite recibir
        Estadisticas del jugador se hace consulta a back    
    */
    return(
        <div className="jugToolbar-wrapper">
            <div className="jugToolbar-img">
                <img alt="Imagen Jugador" src={soccerPlayer}/>
            </div>
            <div className="jugToolbar-jugData">
                <label><b>Nombre:</b> { nombreJugador }</label>
                <label><b>Fecha Nacimiento:</b> { fechaNac }</label>
                <label><b>Edad:</b> {getEdadActual(fechaNac)}</label>
            </div>
            <div className="jugToolbar-jugEstadisticas">
                <label><b>Goles:</b> {Goles}</label>
                <label><b>Rendimiento General:</b> {Rendimiento}</label>
            </div>
            
        </div>
    )
}

export default JugadorEstadisticasToolbar;