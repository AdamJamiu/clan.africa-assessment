import { useReducer, useCallback, createContext } from "react";

const initialState = {
  add_ons: [],
  plan: {
    product: "",
    price: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAN":
      return { ...state, plan: { product: action.payload.product, price: action.payload.price } };
    case "SET_MONTHLY_PRICE":
      return { ...state, plan: { price: state.plan.price / 10 } };
    case "SET_YEARLY_PRICE":
      return { ...state, plan: { price: state.plan.price * 10 } };
    case "SET_ADD_ONS":
      if (state.add_ons.find(addon => addon.name === action.payload.name)) {
        return state;
      } else {
        return { ...state, add_ons: [...state.add_ons, action.payload] };
      }
    case "REMOVE_ADD_ONS":
      return {
        ...state, add_ons: state.add_ons.filter(itm => itm.name !== action.payload)
      };
    case "CALCULATE_TOTAL_PRICE":
      const totalAddOnsPrice = state.add_ons.reduce((acc, addon) => acc + addon.price, 0);
      const totalPrice = state.plan.price + totalAddOnsPrice;
      return { ...state, total_price: totalPrice };
    default:
      return state;
  }
};

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [priceState, dispatch] = useReducer(reducer, initialState);

  const updateMonthlyPrice = () => {
    dispatch({ type: "SET_MONTHLY_PRICE" });
  };

  const updateYearlyPrice = () => {
    dispatch({ type: "SET_YEARLY_PRICE" });
  };

  const addAddOns = itm => {
    dispatch({ type: "SET_ADD_ONS", payload: itm });
  }

  const removeAddOns = itm => {
    dispatch({ type: "REMOVE_ADD_ONS", payload: itm })
  }

  const calculateTotalPrice = () => {
    dispatch({ type: "CALCULATE_TOTAL_PRICE" })
  }

  const setPlan = useCallback((product, price) => {
    dispatch({ type: 'SET_PLAN', payload: { product, price } });
  }, [dispatch]);


  const contextValue = {
    priceState,
    updateMonthlyPrice,
    updateYearlyPrice,
    addAddOns,
    removeAddOns,
    calculateTotalPrice,
    setPlan
  };

  return (
    <PriceContext.Provider value={contextValue}>
      {children}
    </PriceContext.Provider>
  );
};