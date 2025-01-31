import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { EstadisticasRoutes } from '../Estadisticas/Routes/EstadisticasRoutes';
import { PartidoRoutes } from '../partido/Routes/PartidoRoutes';
import { PartidoRapidoRoutes } from '../partidoRapido/routes/PartidoRapidoRoutes';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/partido/*' element={ <PartidoRoutes /> } />
            <Route path='/partidorapido/*' element={ <PartidoRapidoRoutes/>} />
            <Route path='/estadisticas/*' element={ <EstadisticasRoutes />} />
        </Routes>

    )
}