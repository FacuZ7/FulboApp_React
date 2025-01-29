import JugadorEstadisticasToolbar from '../../components/EstadisticasJugador/EstadisticasJugadorToolbar.jsx'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getJugadorById } from '../../api/JugadorService.js';
import LoadingModal from '../../Utils/Loading/LoadingModal.jsx';
import ErrorModal from '../../Utils/Error/ErrorModal.jsx';

const Estadisticas = () => {
    const { id } = useParams();
    const [jugador, setJugador] = useState(null);
    const [partidos, setPartidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jugadorData = await jugadorService.getJugadorById(id);
                const partidosData = await jugadorService.getPartidosByJugadorId(id);
                setJugador(jugadorData);
                setPartidos(partidosData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <LoadingModal/>;
    }

    if (error) {
        return <ErrorModal message={error.message}/>;
    }


    return (
        <div>
            <JugadorEstadisticasToolbar 
                nombre={jugador.nombre}
                apellido={jugador.apellido}
                fechaNacimiento={jugador.fechaNacimiento}
            />
            {/* <ul>
                {partidos.map((partido) => (
                    <li key={partido.id}>
                        {partido.fecha} - {partido.resultado}
                    </li>
                ))}
            </ul> */}
        </div>
    );

    return (
        <>
            <JugadorEstadisticasToolbar/>
        </>
    );

};

export default Estadisticas;