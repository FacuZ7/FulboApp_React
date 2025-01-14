import HomeCard from '../../components/HomeCard/HomeCard.jsx'
import ballImgPath from '../../assets/ball.png'
import soccerField from '../../assets/soccer-field.png'

const Home = () => {
   
    return (
        <>
            <HomeCard imgPath={ballImgPath} cardTitle="Partido Rapido"/>
            <HomeCard imgPath={soccerField} cardTitle="Partido"/>
        </>
        
    );

}

export default Home;