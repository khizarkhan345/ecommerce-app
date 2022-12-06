import Product from "./../components/product";

const DataReducerDefaultState = [];

export default (state = DataReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      //console.log("ADD product is called");
      if (state.length === 0) {
        return [...state, ...action.product];
      } else {
        return state;
      }

    default:
      return state;
  }
};
