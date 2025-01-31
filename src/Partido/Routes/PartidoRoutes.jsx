import { Route, Routes } from "react-router-dom"
import { PartidoPage } from "../pages/PartidoPage.jsx"

export const PartidoRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <PartidoPage/> }/>
        </Routes>
    )
}