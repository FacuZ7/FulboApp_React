const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const THIS_ROUTE = "Partido";

export const getPartidosJugadosPorJugador = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${THIS_ROUTE}/JugadosPorJugador/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los datos del jugador');
    }
    return response.json();
};