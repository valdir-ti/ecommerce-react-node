import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstants"
import API from "../../utils/API";

const listProducts = () => async (dispatch) => {
  
  try {
    
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await API.get("/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

  } catch (error) {

    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });

  }

}

export { listProducts }
