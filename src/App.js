import './App.css';
import React from 'react';
import NameButton from './NameButton';

const people = [
  { name: 'Prince', title: 'Prince', colour: 'green' },
  { name: 'Neil', title: 'Neil', colour: 'red' },
  { name: 'Ben', title: 'Ben', colour: 'yellow' },
];

function App() {
  return <NameButton people={people} />;
}

export default App;
