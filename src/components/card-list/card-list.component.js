import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
  {props.starwarsCharacters.map(starwarsCharacter => (
    <Card key={starwarsCharacter.id} starwarsCharacter={starwarsCharacter} />
  ))}
</div>
);
