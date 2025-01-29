import { Route, Routes } from "react-router-dom"
import { PartidoPage } from "../Pages/PartidoPage"

export const PartidoRoutes = () => {
    return(
        <Routes>
            <Route path="partido" element={ <PartidoPage/> }/>
        </Routes>
    )
}