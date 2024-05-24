//step3

import { useContext } from "react";

import {ItemsContext} from './ItemsContext'

const ItemList = () => {
    const { buyItem } = useContext(ItemsContext)
    const itemsForSale = ['apple', 'Banana', 'Cherry']
    return (
        <div>
        <div>
        <h2>Items For Sale</h2>
        {itemsForSale.map((item, index) => (
            <div key={index}>
            <span>{item}</span>
            <button onClick={() => buyItem(item)}>buy</button>
            </div>
        ))}
        </div>
        </div>
    )
}

export default ItemList