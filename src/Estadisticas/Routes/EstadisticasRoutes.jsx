import { Route, Routes } from "react-router-dom"
import { EstadisticasPage } from "../Pages/EstadisticasPage"

export const EstadisticasRoutes = () => {
    return(
        <Routes>
            <Route path="estadisticas" element={ <EstadisticasPage/> }/>
        </Routes>
    )
}
