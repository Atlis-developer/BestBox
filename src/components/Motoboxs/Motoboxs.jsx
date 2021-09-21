import React from 'react';
import BigImg from '../../images/Motobox01.jpg'
import ImgLeft from '../../images/Motobox02.jpg'
import ImgCenter from '../../images/Motobox03.jpg'
import ImgRight from '../../images/Motobox04.jpg'
import './Motoboxs.css';


const Motoboxs = () => {
  return (
    <div className="motoboxs">
      <h1>МОТОБОКСЫ</h1>
      <div className='txt'>
        Данные мотобоксы обеспечивают безопасное хранение мотоциклов, надёжную защиту от любых воздействий окружающей среды, а специальная система крепежа позволяет удобно и беспрепятственно размещать мото технику внутри бокса.
      </div>
      <div className='big-img'>
      <img src={BigImg} />
      </div>
      <div className='small-img'>
        <div className='image'>
          <img src={ImgLeft} />
        </div>
        <div className='image'>
          <img src={ImgCenter} />
        </div>
        <div className='image'>
          <img className='right' src={ImgRight} />
        </div>
      </div>
    </div>
  );
}

export default Motoboxs;