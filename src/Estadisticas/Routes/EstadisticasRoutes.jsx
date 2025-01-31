import { Route, Routes } from "react-router-dom"
import { EstadisticasPage } from "../pages/EstadisticasPage.jsx";

export const EstadisticasRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <EstadisticasPage/> }/>
        </Routes>
    )
}
