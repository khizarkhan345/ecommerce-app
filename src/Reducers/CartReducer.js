const CartDefaultState = [];

export default (state = CartDefaultState, action) => {
  switch (action.type) {
    case "ADD_CART":
      //console.log(action.product);
      return [...state, action.product];
    case "REMOVE_CART":
      console.log("Remove cart called");
      return state.filter((cart) => cart.id !== action.id);
    case "EDIT_CART":
      return state.map((cart) => {
        if (cart.id === action.id) {
          return { ...cart, ...action.updates };
        } else {
          return cart;
        }
      });
    default:
      return state;
  }
};
