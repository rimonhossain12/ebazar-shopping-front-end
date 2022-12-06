import React, { useContext, useState } from "react";

const CardContext = React.createContext();

export const useCardContext = () => useContext(CardContext);

const handleOnClick = (id) => {
    console.log(id)
}

function CardContextProvider({ children }) {
    const [cart,setCart] = useState([1,2,3,4,5]);
    console.log(cart)

  return (
    <CardContext.Provider value={{ setCart,handleOnClick}}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
