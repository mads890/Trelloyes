import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import List from './List';
import STORE from './store';

describe('Card component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card key='a' title='First card' content='lorem ipsum'/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})

describe('List component', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List key='1' header='First list' cards={STORE.lists.cardIds.map(id => store.allCards[id])}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})