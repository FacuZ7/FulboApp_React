import { Route, Routes } from "react-router-dom"
import { PartidoRapidoPage } from "../pages/PartidoRapidoPage.jsx";

export const PartidoRapidoRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <PartidoRapidoPage/> }/>
        </Routes>
    )
}