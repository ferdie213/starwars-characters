import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { NoMonsterCard } from './components/card/no-monster-card.component';
import { Header } from './components/header/header.component.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      starwarsCharacters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://akabab.github.io/starwars-api/api/all.json')
      .then(response => response.json())
      // .then(results => console.log(results) );
      .then(results => this.setState({ starwarsCharacters: results }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // const { starwarsCharacters, searchField } = this.state;
    // const filteredStarwarsCharacters = starwarsCharacters.filter(starwarsCharacter =>
    //   starwarsCharacter.name.toLowerCase().includes(searchField.toLowerCase())
    // );

const { starwarsCharacters, searchField } = this.state;
    const filteredStarwarsCharacters = starwarsCharacters.filter(starwarsCharacter =>
      starwarsCharacter.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log(filteredStarwarsCharacters, 'from filtered')

    return (
      <div className='App'>
        <Header title='Starwars Characters' />
        <SearchBox onSearchChange={this.onSearchChange} />
        { filteredStarwarsCharacters.length === 0 ? <NoMonsterCard/> : <CardList starwarsCharacters={filteredStarwarsCharacters} />}
      </div>
    );
  }
}

export default App;
