import HomeCard from './components/HomeCard/HomeCard.jsx'
import ballImg from './assets/ball.png'
import soccerField from './assets/soccer-field.png'
import './App.css'

function App() {
  return (
    <div className='app-containter'>
      <HomeCard cardTitle="Carga Rapida" mainImg={ballImg}></HomeCard>
      <HomeCard cardTitle="Carga Partido" mainImg={soccerField}></HomeCard>
    </div>
  )
}

export default App
