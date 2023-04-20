import React, { useReducer } from "react";

const initialState = {
  product: "",
  price: 50,
  plan: {
    product: "",
    price: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MONTHLY_PRICE":
      return { ...state, price: action.payload };
    case "SET_YEARLY_PRICE":
      return { ...state, price: action.payload * 10 };
    default:
      return state;
  }
};

export const PriceContext = React.createContext();

export const PriceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMonthlyPrice = (price) => {
    dispatch({ type: "SET_MONTHLY_PRICE", payload: price });
  };

  const setYearlyPrice = (price) => {
    dispatch({ type: "SET_YEARLY_PRICE", payload: price });
  };

  const contextValue = {
    state,
    setMonthlyPrice,
    setYearlyPrice,
  };

  return (
    <PriceContext.Provider value={contextValue}>
      {children}
    </PriceContext.Provider>
  );
};
