import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={props.starwarsCharacter.image}
      className='img-style'
    />
    <h2> {props.starwarsCharacter.name} </h2>
    <p> {props.starwarsCharacter.gender} </p>
    <p> {props.starwarsCharacter.species} </p>
  </div>
);
