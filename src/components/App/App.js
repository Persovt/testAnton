import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
                value: 'write new app',
                isDone: true,
                id: 1
            },
            {
                value: 'write props',
                isDone: true,
                id: 2
            },
            {
                value: 'will done all deals',
                isDone: false,
                id: 3
            }
        ],
        count: 1
    };

onClickDone = id => {
    const newItemList = this.state.items.map(item => {
        const newItem = { ...item};

        if (item.id === id) {
            newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    this.setState({ items: newItemList});
};

onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id)}));

onClickAdd = value => {
        if (value === '') {
            this.setState((state) => ({isError: true}));
        } else {
            this.setState(state => ({
                items:[
                    ...state.items,
                    {
                        value,
                        isDone: false,
                        id: state.count + 1
                    }        
                ],
                  count: state.count + 1,
                  isError: false
                }));
        } 
};


  render () {
        return ( 
        <div className={styles.wrap}>
                <h1 className={styles.title}>Important deals</h1>
                <InputItem 
                onClickAdd={this.onClickAdd}
                isError={this.props.isError}
                />
                <ItemList 
                   items={this.state.items} 
                   onClickDone={this.onClickDone} 
                   onClickDelete={this.onClickDelete} />
                <Footer count={this.state.count} />
        </div>);
    }
};

export default App;