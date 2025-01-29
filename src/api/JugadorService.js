const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const THIS_ROUTE = "Jugador";

export const getJugadorById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${THIS_ROUTE}/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener los datos del jugador');
    }
    return response.json();
};
