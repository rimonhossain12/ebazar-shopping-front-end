import React, { useContext, useState } from "react";

const CardContext = React.createContext();

export const useCardContext = () => useContext(CardContext);

function CardContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleOnClick = (data) => {
    setCart([...cart,data]);
  };

  console.log('length = ',cart?.length);

  return (
    <CardContext.Provider value={{ cart, handleOnClick }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
