import { HomeCard } from "../components/HomeCard"
import { HomeLayout } from "../layout/HomeLayout"

export const HomePage = () => {
    return(
        <HomeLayout>   
            <HomeCard title="Partido" redirect="/partido"/> 
            <HomeCard title="Partido Rapido" redirect="/partidorapido"/> 
            <HomeCard title="Estadisticas" redirect="/estadisticas"/> 
        </HomeLayout>   
    )
}