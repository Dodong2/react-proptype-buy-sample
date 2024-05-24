//Step1

import { useContext } from 'react';
import { ItemsContext } from './ItemsContext';

const Cart = () => {
    const { items } = useContext(ItemsContext);

    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>No Items in the Cart</p>
            ) : (<div>        {/* choice 1 list */}
                {/* <ul>
         {items.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
       </ul>*/}

                {/* choice 2 table */}
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)}
        </div>
    );
};

export default Cart;
