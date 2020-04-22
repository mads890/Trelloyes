import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    const customList = store.lists.map(list => (
      <List 
        key={list.id} 
        header={list.header} 
        cards={list.cardIds.map(id => store.allCards[id])}
      />
    ))
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {customList}
        </div>
    </main>
    );
  }
}

export default App;