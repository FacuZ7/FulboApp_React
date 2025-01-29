import EstadisticasJugadorToolbar from '../../components/EstadisticasJugador/EstadisticasJugadorToolbar.jsx'
import { useState, useEffect } from 'react';
import { getJugadorById } from '../../api/JugadorService.js';
import { getPartidosJugadosPorJugador } from '../../api/PartidoService.js';
import LoadingModal from '../../Utils/Loading/LoadingModal.jsx';
import ErrorModal from '../../Utils/Error/ErrorModal.jsx';

const Estadisticas = () => {
    const [jugador, setJugador] = useState(null);
    const [partidos, setPartidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jugadorData = await getJugadorById(1);
                const partidosData = await getPartidosJugadosPorJugador(1);
                setJugador(jugadorData);
                setPartidos(partidosData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <LoadingModal/>;
    }

    if (error) {
        return <ErrorModal />;
    }


    return (
        <div>
            <EstadisticasJugadorToolbar 
                nombre={jugador.nombre}
                apellido={jugador.apellido}
                fechaNacimiento={jugador.fechaNacimiento}
            />
            {/* Crear componente para esto, un UL se ve re feo*/}
            
            <ul>
                {partidos.map((partido) => (
                    <li key={partido.partidoID}>
                        {partido.fecha} - {partido.resultado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Estadisticas;