/* eslint-disable react/prop-types */
import './HomeCard.css';

const HomeCard = ({imgTitle="main-image", imgPath, cardTitle, onClick}) => {
   
  return (
      <div className="card" onClick={onClick}>
          <div className='card-img-container'>
              <img title={imgTitle} src={imgPath} alt="card-image"></img>
          </div>

          <div className='card-title'>
              <h1>{cardTitle}</h1>
          </div>  
      </div>
  );

}

export default HomeCard;