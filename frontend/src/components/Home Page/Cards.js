import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards'>
      <h1>Choose Your Products</h1>
      
      
      <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchTerm"
              // onChange={this.handleTextSearch}
            ></input>
            </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jack2.jpg'
              text='You can find any kind of car Jack here'
              label='Truck Jack'
              path='/services'
            />
            <CardItem
              src='images/lights.jpg'
              text='High Quality Lights (Head Lights, Signal Lights, Brake Lights) '
              label='Head Lights'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/piston 2.jpg'
              text='Any Kind of Pistons.'
              label='Pistons'
              path='/services'
            />
            <CardItem
              src='images/tire2.jpg'
              text='Worlds High Quality Tire Brands (TOWHAWK, CEAT,)'
              label='Tires'
              path='/products'
            />
            <CardItem
              src='images/washer.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='High Pressure washer'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
