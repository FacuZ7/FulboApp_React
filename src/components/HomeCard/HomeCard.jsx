/* eslint-disable react/prop-types */
import './HomeCard.css';

const HomeCard = ({ cardTitle, mainImg }) => {

  return (
    <div className="card">
      <div className='card-img-container'>
        <img title='image' src={mainImg}></img>
      </div>
      <div className='card-title'>
        <h1>{cardTitle}</h1>
      </div>  
    </div>
  );
};

export default HomeCard;