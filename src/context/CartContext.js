import React from "react";

export const CardContext = React.createContext();

function CardContextProvider({ children }) {
  return (
    <CardContext.Provider value={{ keyboard: "I am keyboard" }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
