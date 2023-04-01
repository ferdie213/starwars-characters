import React from 'react';

import './header.styles.css';

export const Header = props => (
  <div className='header-style'>
    <h1>{props.title}</h1>
  </div>
);