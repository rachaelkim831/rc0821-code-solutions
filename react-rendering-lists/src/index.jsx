import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];

  const listPokedex = pokedex.map(pokemon => <li key={pokemon.number}>{pokemon.name}</li>);
  return (
    <ul>
      {listPokedex}
    </ul>
  );
}

ReactDOM.render(
  <List />,
  document.getElementById('root')
);
