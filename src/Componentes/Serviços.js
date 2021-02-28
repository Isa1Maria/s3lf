import React from 'react';
import './Serviços.css';
import CardItem from './CardItem';



function Serviços() {
  return (
    <div className='cards'>
    <h1>Porquê a S3LF?</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='Images/img-3.jpg'
            text='Sessões específicas'
            path='/services'
          />
        
          <CardItem
            src='serviço2.jpg'
            text='Serviços Online'
            path='/products'
          />
          <CardItem
            src='serviço1.jpg'
            text='Aulas a Clientes Privados'
            path='/sign-up'
          />
        </ul>
      </div>
    </div>
  </div>
);
}

export default Serviços;