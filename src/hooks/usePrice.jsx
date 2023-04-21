import { useContext } from "react";
import { PriceContext } from "../providers/PriceControl";

const usePrice = () => {
    return useContext(PriceContext)
}

export default usePrice;