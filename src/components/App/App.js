import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'write new app';

const App = () => (
    <div>
        <h1>Important deals</h1>
        <InputItem />
        <ItemList todoItem={todoItem}/>
        <Footer count={3} />
    </div>);

export default App;