import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const todpItem = 'write new app'

const App = () => {
    const items = [
        {
            value: 'write new app'
        },
        {
            value: 'write props'
        },
        {
            value: 'will done all deals'
        }
    ];

    return( 
    <div className="wrap">
        <h1 className="wrap__title">Important deals</h1>
        <InputItem />
        <ItemList items={items}/>
        <Footer count={3} />
    </div>);
}

export default App;