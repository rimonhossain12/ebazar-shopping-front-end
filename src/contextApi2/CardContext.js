import React, { useContext, useEffect, useState } from "react";

const CardContext = React.createContext();

export const useCardContext = () => useContext(CardContext);

function CardContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = localStorage.getItem("cart");
    if (getCart) {
      setCart(JSON.parse(getCart));
    }
  }, []);

  const handleAddToCart = (data) => {
    const findIndex = cart.findIndex((item) => item.id == data.id);
    if (findIndex !== -1) {
      cart[findIndex].qty = cart[findIndex].qty ? cart[findIndex].qty + 1 : 1;
      setCart([...cart], cart[findIndex]);
    } else {
      setCart([
        ...cart,
        {
          ...data,
          qty: 1,
        },
      ]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  console.log(
    
    [cart]
  )

  const incrementQuantity = (id) => {
    console.log(id);
  };

  const decrementQuantity = (id) => {
    console.log(id);
  };

  return (
    <CardContext.Provider
      value={{ cart, handleAddToCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
