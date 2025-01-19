/* eslint-disable react/prop-types */
import { getEdadActual } from "../../Utils/DateUtils";
import { useEffect, useState } from "react";
import './JugadorEstadisticasToolbar.css'
import soccerPlayer from '../../assets/soccer-player.png'

const URL = 'https://localhost:44330/api/Jugador/5';

const JugadorEstadisticasToolbar = () => {
    const Goles = 52;
    const Rendimiento = 6.4;
    const initialPersonalData = {
        nombre: ''
        ,apellido: ''
        ,fechaNacimiento: ''
    }
    const [personalData, setPersonalData] = useState(initialPersonalData);
    
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {setPersonalData(data); console.log(data)})

        
    }, [])

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
                <label><b>Nombre:</b> { personalData.nombre + " " + personalData.apellido }</label>
                <label><b>Fecha Nacimiento:</b> { personalData.fechaNacimiento }</label>
                <label><b>Edad:</b> {getEdadActual(personalData.fechaNacimiento)}</label>
            </div>
            <div className="jugToolbar-jugEstadisticas">
                <label><b>Goles:</b> {Goles}</label>
                <label><b>Rendimiento General:</b> {Rendimiento}</label>
            </div>
            
        </div>
    )
}

export default JugadorEstadisticasToolbar;