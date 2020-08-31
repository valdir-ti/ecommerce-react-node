import Cookie from "js-cookie";
const { default: API } = require("../../utils/API");
const { CART_ADD_ITEM, CART_DEL_ITEM } = require("../constants/cartConstants");

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await API.get("/products/" + productId);

    dispatch({
      type: CART_ADD_ITEM, payload:{
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.countInStock,
      qty
    }});

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

  } catch (error) {
    
  }
}

const removeFromCart = (productId) => async (dispatch, getState) => {  
  dispatch({
    type: CART_DEL_ITEM, 
    payload: productId
  });

  const { cart:{ cartItems } } = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));  
}

export { addToCart, removeFromCart };