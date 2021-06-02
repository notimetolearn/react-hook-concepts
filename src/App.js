import React, { useState } from 'react';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is a Dog?',
        content: 'A dog is a domestic Animal'
    },
    {
        title: 'What kinds of dogs are there?',
        content: 'There are many breeds of dogs'
    },
    {
        title: 'How do you acquire a dog?',
        content: 'Buy a dog from pet shop.'
    }
];

const options = [
    {
        label: 'Nature Green',
        value: 'green'
    },
    {
        label: 'Dragon Red',
        value: 'red'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route route="/">
                <Accordion items={items} />
            </Route>
            <Route route="/wiki">
                <SearchBar />
            </Route>
            <Route route="/dropdown">
                <Dropdown options={options} selected={selected} onSelectChanged={setSelected} selectLabel="Select a color" />
            </Route>
            <Route route="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;