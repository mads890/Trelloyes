import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        <List>
          {props.store.lists}
        </List>
      </div>
    </main>
  );
}

export default App;