import React from 'react';
import './App.css';
import Button from './components/Button';
import GlobalStyle from './globalStyles';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import cities from './assets/cities.json'

function App() {
  return (
    <>
      <GlobalStyle />
      <Button/>
      <Input placeholder='Введите текст' isValidated={true}></Input>
      <Button disabled={true}>123</Button>
      <Dropdown optionsData={cities}>Выберите город *</Dropdown>
    </>
      
  );
}

export default App;
