/* eslint-disable react/prop-types */
import DateUtils from "../../Utils/DateUtils.js";
import { useEffect, useState } from "react";
import './EstadisticasJugadorToolbar.css'
import soccerPlayer from '../../assets/soccer-player.png'
import LoadingModal from "../../Utils/Loading/LoadingModal.jsx";
import Foto from '../../assets/FotoCV.jpeg'

//const URL = 'https://localhost:44330/api/Jugador/1';

const EstadisticasJugadorToolbar = ({nombre,apellido,fechaNacimiento}) => {
    const Goles = 52;
    const Rendimiento = 6.8;

    /*
        Datos del jugador llegan por props, la idea mas adelante es guardar datos de login en cookie, quizas ni las necesite recibir
        Estadisticas del jugador se hace consulta a back    
    */
    return(
        <div className="jugToolbar-wrapper">
            <div className="jugToolbar-img">
                <img alt="Imagen Jugador" src={Foto}/>
            </div>
            <div className="jugToolbar-jugData">
                <label><b>Nombre:</b> { nombre + " " + apellido }</label>
                <label><b>Fecha Nacimiento:</b> { DateUtils.formatDate(new Date(fechaNacimiento)) }</label>
                <label><b>Edad:</b> {DateUtils.getEdadActual(fechaNacimiento)}</label>
            </div>
            <div className="jugToolbar-jugEstadisticas">
                <label><b>Goles:</b> {Goles}</label>
                <label><b>Rendimiento General:</b> {Rendimiento}</label>
            </div>
            
        </div>
    )
}

export default EstadisticasJugadorToolbar;