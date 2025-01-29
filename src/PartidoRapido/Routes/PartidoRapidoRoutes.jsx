import { Route, Routes } from "react-router-dom"
import { PartidoRapidoPage } from "../Pages/PartidoRapidoPage"

export const PartidoRapidoRoutes = () => {
    return(
        <Routes>
            <Route path="partidorapido" element={ <PartidoRapidoPage/> }/>
        </Routes>
    )
}