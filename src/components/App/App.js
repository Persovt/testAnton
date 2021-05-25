import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
    const items = [
        {
            value: 'write new app',
            isDone: true
        },
        {
            value: 'write props',
            isDone: true
        },
        {
            value: 'will done all deals',
            isDone: false
        }
    ];

    return( 
    <div className={styles.wrap}>
        <h1 className={styles.title}>Important deals</h1>
        <InputItem />
        <ItemList items={items}/>
        <Footer count={3} />
    </div>);
}

export default App;