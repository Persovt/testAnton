import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'write props'} /></li>
    <li><Item todoItem={'will done all deals'} /></li>
</ul>);

export default ItemList;