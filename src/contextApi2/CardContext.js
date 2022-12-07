import React, { useContext, useEffect, useState } from "react";

const CardContext = React.createContext();

export const useCardContext = () => useContext(CardContext);

function CardContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = localStorage.getItem('cart');
    if ( getCart ){
      setCart(JSON.parse(getCart));
    }
  }, []);

  const handleAddToCart = (data) => {
    const findIndex = cart.findIndex((item) => item.id === data.it);
    if (findIndex !== -1) {
      cart[findIndex].quantity = cart[findIndex].quantity
        ? (cart[findIndex].quantity += 1)
        : 1;
      setCart([...cart, data]);
    } else {
      setCart([
        ...cart,
        {
          quantity: 1,
        },
      ]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  console.log("cart products = ", cart);

  return (
    <CardContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
