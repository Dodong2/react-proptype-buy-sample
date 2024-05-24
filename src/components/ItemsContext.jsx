//step2
//install: npm install prop-types
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const buyItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemsContext.Provider value={{ items, buyItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

ItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};