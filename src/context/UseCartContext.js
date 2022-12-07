import useContext from "react";
import { CardContext } from "./CartContext";

export const useCardContext = () =>  useContext(CardContext);
