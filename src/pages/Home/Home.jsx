import HomeCard from '../../components/HomeCard/HomeCard.jsx'
import ballImgPath from '../../assets/ball.png'
import soccerField from '../../assets/soccer-field.png'
import stadistics from '../../assets/tendencia.png'

import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
    const nav = useNavigate();

    const card_OnClick = (path="./") => {
        nav(path);
    }


    return (
        <div className='home-main'>
            <HomeCard imgPath={ballImgPath} cardTitle="Partido Rapido" onClick={() => card_OnClick("/partidorapido")}/>
            <HomeCard imgPath={soccerField} cardTitle="Partido" onClick={() => card_OnClick("/partido")}/>
            <HomeCard imgPath={stadistics} cardTitle="Estadisticas" onClick={() => card_OnClick("/estadisticas")}/>    
        </div>
        
    );

}

export default Home;