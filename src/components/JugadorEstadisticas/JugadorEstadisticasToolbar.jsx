/* eslint-disable react/prop-types */
import DateUtils from "../../Utils/DateUtils.js";
import { useEffect, useState } from "react";
import './JugadorEstadisticasToolbar.css'
import soccerPlayer from '../../assets/soccer-player.png'
import LoadingModal from "../../Utils/Loading/LoadingModal";

const URL = 'https://localhost:44330/api/Jugador/1';

const JugadorEstadisticasToolbar = () => {
    const Goles = 52;
    const Rendimiento = 6.4;
    const initialPersonalData = {
        nombre: ''
        ,apellido: ''
        ,fechaNacimiento: ''
    }
    const [personalData, setPersonalData] = useState(initialPersonalData);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Función para obtener los datos del jugador
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setPersonalData(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    /*
        Datos del jugador llegan por props, la idea mas adelante es guardar datos de login en cookie, quizas ni las necesite recibir
        Estadisticas del jugador se hace consulta a back    
    */
    return(
        <div className="jugToolbar-wrapper">
            {isLoading && <LoadingModal />}
            <div className="jugToolbar-img">
                <img alt="Imagen Jugador" src={soccerPlayer}/>
            </div>
            <div className="jugToolbar-jugData">
                <label><b>Nombre:</b> { personalData.nombre + " " + personalData.apellido }</label>
                <label><b>Fecha Nacimiento:</b> { DateUtils.formatDate(new Date(personalData.fechaNacimiento)) }</label>
                <label><b>Edad:</b> {DateUtils.getEdadActual(personalData.fechaNacimiento)}</label>
            </div>
            <div className="jugToolbar-jugEstadisticas">
                <label><b>Goles:</b> {Goles}</label>
                <label><b>Rendimiento General:</b> {Rendimiento}</label>
            </div>
            
        </div>
    )
}

export default JugadorEstadisticasToolbar;