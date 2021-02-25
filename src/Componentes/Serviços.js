import React from 'react';
import './Serviços.css';
import CardItem from './CardItem';

function Serviços() {
  return (
    <div className='cards'>
      <h1>NOSSOS SERVIÇOS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Ginástica Laboral'
              label='Ginástica'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Aulas de Pilates'
              label='Pilates'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Psicologia Positiva'
              label='Psicologia'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Serviços;