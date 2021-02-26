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
            src='images/img-3.jpg'
            text='Sessões específicas'
            path='/services'
          />
          <CardItem
            src='images/img-4.jpg'
            text='Serviços Online'
            path='/products'
          />
          <CardItem
            src='images/img-8.jpg'
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