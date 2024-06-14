import React from 'react';
import logo from './logo.svg';
import './App.css';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

function App() {
  return <div className='container is-fluid'>
    <CarForm />
    <CarList />
    <CarSearch />
    <CarValue />
  </div>;
}

export default App;
